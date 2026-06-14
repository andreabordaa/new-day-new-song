# 🌅 New Day, New Song

A daily music discovery app — every day brings a new song to explore.

**[Live Demo →](https://new-day-new-song.vercel.app/)**

## About

New Day, New Song shows a different song every day, pulled from the Genius API. The song of the day is the same for every visitor and stays consistent all day, then changes automatically at midnight — no database required, since the daily pick is generated deterministically from the date itself. Look back at the last 7 days of songs, learn more about the project, or send feedback directly from the site.

This is a complete rebuild of an earlier vanilla HTML/CSS/JS version, rewritten in Next.js with a custom sunset-pastel design system.

## ✨ Features

- 🎵 **Song of the Day** — a new song every day, generated deterministically from the date
- 📅 **Previous Songs** — browse the last 7 days of picks in a hover-interactive grid
- 💌 **Feedback form** — sends messages straight to the site owner's inbox via email
- 🎨 Custom sunset pastel design system with Fredoka + Poppins typography

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Genius API](https://docs.genius.com/) — song data
- [Resend](https://resend.com/) — feedback emails
- [Vercel](https://vercel.com/) — hosting & deployment

## 🎨 Design

| Color      | Hex       | Use                    |
| ---------- | --------- | ---------------------- |
| Soft White | `#FAF9F6` | Background             |
| Slate      | `#4A4E69` | Text                   |
| Light Pink | `#FF87AB` | Accent                 |
| Lavender   | `#CDB4DB` | Accent / active states |
| Baby Blue  | `#AAD8EB` | Accent                 |

**Fonts:** [Fredoka](https://fonts.google.com/specimen/Fredoka) for headings, [Poppins](https://fonts.google.com/specimen/Poppins) for body text.

## 🚀 Getting Started

### 1. Clone and install

```
bash
git clone https://github.com/andreabordaa/new-day-new-song.git
cd your-repo-name
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the root:

```
GENIUS_ACCESS_TOKEN=your_genius_access_token
RESEND_API_KEY=your_resend_api_key
FEEDBACK_EMAIL=your_email@example.com
```

- Get a Genius access token at [genius.com/api-clients](https://genius.com/api-clients)
- Get a Resend API key at [resend.com](https://resend.com)

### 3. Run the dev server

```
bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
app/
├── page.js # Home — Song of the Day
├── previous/page.js # Previous Songs grid
├── about/page.js # About page
├── feedback/page.js # Feedback form
├── api/feedback/route.js # Sends feedback emails via Resend
├── layout.js # Root layout, fonts, metadata
└── globals.css # Theme tokens & global styles
components/
└── Layout.js # Shared nav + footer
lib/
└── genius.js # Genius API helpers (song fetching logic)
```

## 🔭 Roadmap

- [ ] Loading states while fetching song data
- [ ] Custom 404 page
- [ ] Audio previews

## 👩‍💻 Author

Built by [Andrea Borda](https://github.com/andreabordaa)
