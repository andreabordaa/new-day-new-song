const GENIUS_API = "https://api.genius.com/songs";
const MAX_SONG_ID = 3000000;
const MAX_ATTEMPTS = 8;

//turns today's date into a number so the random song is consistent
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function getTodayKey() {
  return new Date().toISOString().split("T")[0];
}

export async function getSongOfTheDay() {
  const todayKey = getTodayKey();
  const baseSeed = hashString(todayKey);

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
        date: todayKey,
      };
    }
    //if returns 404 (the song doesn't exist), loop and try next attempt
  }
  return null;
}
