const GENIUS_API = "https://api.genius.com/songs";
const MAX_SONG_ID = 3000000;
const MAX_ATTEMPTS = 8;

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function toDateKey(date) {
  return date.toISOString().split("T")[0];
}

export function getTodayKey() {
  return toDateKey(new Date());
}

// Core function — works for ANY date, past or present
export async function getSongForDate(dateKey) {
  const baseSeed = hashString(dateKey);

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    const songId = ((baseSeed + attempt) % MAX_SONG_ID) + 1;

    const res = await fetch(`${GENIUS_API}/${songId}`, {
      headers: {
        Authorization: `Bearer ${process.env.GENIUS_ACCESS_TOKEN}`,
      },
      next: { revalidate: 3600 },
    });

    if (res.ok) {
      const data = await res.json();
      const song = data.response.song;

      return {
        title: song.title,
        artist: song.primary_artist.name,
        artistUrl: song.primary_artist.url,
        image: song.song_art_image_url,
        url: song.url,
        date: dateKey,
      };
    }
  }

  return null;
}

export async function getSongOfTheDay() {
  return getSongForDate(getTodayKey());
}

// Today + the previous 6 days, most recent first
export async function getWeekSongs() {
  const dateKeys = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    return toDateKey(d);
  });

  const songs = await Promise.all(dateKeys.map((key) => getSongForDate(key)));
  return songs.map((song, i) => (song ? { ...song, isToday: i === 0 } : null));
}
