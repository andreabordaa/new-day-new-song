import { getSongOfTheDay } from "@/lib/genius";

export default async function Home() {
  const song = await getSongOfTheDay();
  if (!song) {
    return (
      <div className="text-center text-slate/60">
        <p>{"Couldn't find today's song - try refreshing!"}</p>
      </div>
    );
  }

  const dateLabel = new Date(song.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col items-center text-center">
      {/* Date */}
      <span className="text-sm font-semibold uppercase tracking-widest text-white bg-linear-to-br from-pink to-lavender shadow-md rounded-full px-8 py-2 mt-8 mb-12">
        {dateLabel}
      </span>

      {/* Song Image */}
      <div className="relative mb-8">
        <div className="absolute -inset-4 bg-linear-to-br from-pink via-lavender to-blue rounded-full blur-2xl opacity-100" />
        <img
          src={song.image}
          alt={`${song.title} album art`}
          className="relative w-60 h-60 md:w-80 md:h-80 rounded-2xl object-cover shadow-xl"
        />
      </div>

      {/* Song Title */}
      <h1 className="font-display text-3xl font-bold text-slate py-4">
        {song.title}
      </h1>

      {/* Song Artist */}
      <a
        href={song.artistUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-semibold uppercase tracking-widest bg-[#f6bfca] text-pink-dark shadow-md rounded-full px-4 py-1.5 my-4 hover:opacity-80 transition-opacity"
      >
        {song.artist}
      </a>

      <a
        href={song.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-sm bg-lavender shadow-md text-white rounded-full px-6 py-1.5 my-4 hover:opacity-90 transition-opacity"
      >
        View Lyrics on Genius
      </a>
    </div>
  );
}
