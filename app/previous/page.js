import { getWeekSongs } from "@/lib/genius";

function formatShortDate(dateKey) {
  return new Date(dateKey).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default async function PreviousSongs() {
  const songs = (await getWeekSongs()).filter(Boolean);

  return (
    <div>
      <h1 className="font-display text-3xl text-shadow-sm font-bold text-slate mb-2">
        {"This Week's Songs"}
      </h1>

      <p className="text-md font-semibold uppercase tracking-widest text-lavender text-shadow-xs mb-8">
        {formatShortDate(songs[songs.length - 1]?.date)} -{" "}
        {formatShortDate(songs[0]?.date)}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {songs.map((song) => (
          <a
            key={song.date}
            href={song.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center"
          >
            <div
              className={`w-full aspect-square rounded-2xl overflow-hidden mb-2 transition-all duration-200
                    group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-lavender/30
                    ${song.isToday ? "ring-4 ring-offset-2 ring-offset-cream ring-lavender shadow-md shadow-lavender/20" : "shadow-sm"}`}
            >
              <img
                src={song.image}
                alt={`${song.title} album art`}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-shadow-2xs font-semibold uppercase tracking-wide text-lavender/50 mt-2">
              {song.isToday ? "Today" : formatShortDate(song.date)}
            </span>
            <span className="font-display font-semibold text-sm text-slate truncate max-w-full">
              {song.title}
            </span>
            <span className="text-xs text-slate/40 mb-4">{song.artist}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
