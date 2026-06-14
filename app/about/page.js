export default function About() {
  return (
    <div>
      <h1 className="font-display text-3xl text-shadow-sm font-bold text-slate mb-4">
        About New Day, New Song
      </h1>

      <p className="text-md font-semibold uppercase tracking-widest text-lavender text-shadow-xs mb-8">
        A new song, every single day
      </p>

      <p className="text-base text-slate/80 leading-relaxed mt-8">
        Ever get tired of listening to the same rotation of songs? New Day, New
        Song was created for music lovers who enjoy discovering something fresh
        every day!
      </p>
      <p className="text-base text-slate/80 leading-relaxed mt-4">
        Our site displays a new song daily, featuring a mix of well-known hits
        and underrated gems from a variety of genres.
      </p>

      {/* Our team section */}
      <h2 className="text-xs font-semibold uppercase tracking-widest text-slate/50 my-8">
        Our team
      </h2>

      <div className="bg-white rounded-2xl flex items-start gap-6 p-8 border border-slate/10 shadow-sm">
        <div className="flex items-center justify-center w-16 h-16 shrink-0 bg-lavender rounded-full text-2xl">
          👩🏻‍💻
        </div>
        <div>
          <h3 className="font-display font-semibold text-lg text-slate">
            Andrea Borda
          </h3>
          <p className="font-medium text-xs text-lavender tracking-widest uppercase mb-2">
            Web Developer
          </p>
          <p className="text-base text-slate/80 leading-relaxed">
            Andrea is a web developer with a passion for creating engaging and
            user-friendly websites. A combination of technical skills with a
            love for music, she created{" "}
            <span className="font-semibold text-slate">New Day, New Song</span>{" "}
            to provide a platform for music lovers to discover new songs every
            day.
          </p>
        </div>
      </div>
    </div>
  );
}
