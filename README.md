# 🎬 MovieWatch - Your Cinematic Discovery Hub

A beautiful, modern web application for discovering, searching, and managing your favorite movies and TV shows. Built with React, Vite, and Tailwind CSS.

## 🌐 Live Demo

**[Visit MovieWatch Live](https://movie-watchlist-cor5.vercel.app/)** - Try it now! Search movies, use voice search, and manage your watchlist.

## ✨ Features

### 🔍 Smart Search & Discovery

- **Voice Search** - Speak to search for movies and series hands-free
- **Fuzzy Search** - Intelligent text search with typo tolerance
- **Real-time Results** - Powered by TMDB API with instant feedback
- **Trending Content** - Discover what's trending right now

### 📋 Comprehensive Filtering

- **Genre Filter** - Filter by Action, Romance, Drama, Comedy, and more
- **Media Type Filter** - Switch between Movies, TV Shows, or All
- **Watch Status** - Track what you've watched vs. want to watch later
- **Advanced Sorting** - Sort by Recently Added, Top Rated, or Alphabetically

### 💖 Favorites Management

- **Save to Watchlist** - Add movies/shows to your personal favorites
- **Persistent Storage** - All favorites saved in browser localStorage
- **Quick Actions** - Remove items or toggle watch status instantly
- **Dedicated Favorites Page** - Manage your entire collection in one place

### 🎥 Detailed View

- **Movie Details Modal** - Title, rating, release date, runtime, language, status
- **Cast Information** - See cast members for each title
- **Genre Tags** - Browse by genre directly from details
- **Trailer Links** - Watch official trailers on YouTube
- **Mobile Responsive** - Works seamlessly on all screen sizes

### 🌙 Premium Design

- **Dark Cinematic Theme** - Elegant zinc/black gradient with red accents
- **Glassmorphism Effects** - Frosted glass backgrounds with blur
- **Smooth Animations** - Transitions and hover effects for polish
- **Responsive Layout** - Adapts beautifully from mobile to desktop

### 📱 Mobile-Optimized

- **Touch-Friendly** - Optimized buttons and controls for mobile
- **Adaptive View Details** - Always-visible buttons on smaller screens
- **Responsive Navigation** - Mobile menu with collapsible navigation
- **Fast Loading** - Optimized with Vite for instant load times

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4.3
- **Search Engine**: Fuse.js (fuzzy search)
- **Voice Recognition**: React Speech Recognition
- **Icons**: Lucide React
- **Routing**: React Router v7
- **API**: The Movie Database (TMDB) API

## 📦 Installation

### Prerequisites

- Node.js (v18+)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/Dwipraj-creator/Movie-Watchlist.git
cd Movie-Watchlist/frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the `frontend` directory:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

Get your TMDB API key:

- Visit [The Movie Database (TMDB)](https://www.themoviedb.org/settings/api)
- Sign up for a free account
- Generate an API key
- Add it to your `.env` file

4. **Start the development server**

```bash
npm run dev
```

The app will be available at `http://localhost:5174`

## 🚀 Build & Deploy

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 📂 Project Structure

```
Movie-Watchlist/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx          # Landing page
│   │   │   ├── Explore.jsx       # Main search & discovery page
│   │   │   ├── Favourites.jsx    # Watchlist management
│   │   │   ├── About.jsx         # About page with developer info
│   │   │   └── ContactPage.jsx   # Contact form (WhatsApp)
│   │   ├── components/
│   │   │   └── Navbar.jsx        # Navigation with scroll effect
│   │   ├── App.jsx               # Main app component & routing
│   │   ├── main.jsx              # Entry point
│   │   └── data/
│   │       └── data.js           # Static data & genres
│   ├── public/                   # Static assets
│   ├── src/pic/                  # Profile images
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── README.md
└── .gitignore
```

## 🎮 How to Use

### Search for Movies

1. Go to the **Explore** page
2. Type a movie or series name in the search box
3. Or use the **🎤 Speak** button for voice search
4. Results appear instantly with fuzzy matching

### Filter Results

- Use **Genre Filter** dropdown to narrow by category
- Use **Media Type** dropdown to show Movies or TV Shows only
- Results update in real-time

### View Details

1. Click **View Details** on any card
2. See full information including:
   - Plot synopsis
   - Cast list
   - Release date & ratings
   - Genres
   - Link to watch trailer
3. Click ✕ or outside the modal to close

### Manage Favorites

1. Click the **♡** heart icon to save an item
2. Go to **Favourites** page to view saved items
3. Use **Search**, **Filter**, or **Sort** on your watchlist
4. Click watch status icon to mark as watched/want to watch
5. Click **♥** to remove from favorites

## 🎙️ Voice Search Guide

The app supports **hands-free voice search** using your browser's speech recognition:

1. Click the **🎤 Speak** button on Explore page
2. Speak clearly (e.g., "Inception", "The Matrix")
3. Your speech is converted to text automatically
4. Results appear instantly after speaking
5. You can also manually edit the search text
6. Works best in quiet environments

**Note:** Voice search requires microphone permissions and works best in Chrome, Edge, and Safari.

## 🎨 Customization

### Change Color Scheme

Edit Tailwind colors in `tailwind.config.js` - currently using red (`#EF4444`) and zinc (`#27272A`) palette.

### Add More Genres

Update genre options in:

- [Explore.jsx](frontend/src/pages/Explore.jsx) - genre filter dropdown
- [data.js](frontend/src/data/data.js) - genre configuration

### Modify API Endpoints

TMDB API endpoints can be customized in:

- [Explore.jsx](frontend/src/pages/Explore.jsx) - search, details, videos
- [Favourites.jsx](frontend/src/pages/Favourites.jsx) - same endpoints for details

## 🔗 Pages Overview

| Page       | Route         | Purpose                             |
| ---------- | ------------- | ----------------------------------- |
| Home       | `/`           | Landing page with features showcase |
| Explore    | `/explore`    | Main search & discovery hub         |
| Favourites | `/favourites` | Watchlist management dashboard      |
| About      | `/about`      | Project info & developer details    |
| Contact    | `/contact`    | WhatsApp contact form               |

## 💾 Data Persistence

All favorites are automatically saved to browser's **localStorage** under the key `movie-watchlist`. This means:

- ✅ Your watchlist persists across sessions
- ✅ Data stored locally (no server needed)
- ✅ Clearing browser data will reset favorites

To backup your favorites:

```javascript
// In browser console:
localStorage.getItem("movie-watchlist");
```

## 🌐 API Information

This project uses **The Movie Database (TMDB) API**:

- Free tier available
- No backend server required
- 40 requests per 10 seconds (generous limits)
- Comprehensive movie & TV database

Learn more: [TMDB API Documentation](https://www.themoviedb.org/settings/api)

## 📱 Browser Support

- ✅ Chrome/Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance

- **Vite Build**: ~1s build time
- **Bundle Size**: ~330KB gzipped
- **Performance Score**: Optimized for fast loading
- **Image Optimization**: Using TMDB's optimized poster images

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

### Planned Features

- [ ] User authentication & cloud sync
- [ ] Dark/Light theme toggle
- [ ] Multiple watchlists
- [ ] Movie recommendations
- [ ] Social sharing features
- [ ] Rating & reviews

## 📞 Contact & Support

- **Developer**: Dwipraj Dey
- **GitHub**: [Dwipraj-creator](https://github.com/Dwipraj-creator)
- **Contact Form**: Available in app at `/contact` (WhatsApp integration)

## 📄 License

This project is open source and available under the MIT License.

## 🎬 Credits

- Movie data from [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Icons from [Lucide React](https://lucide.dev/)
- UI components with [Tailwind CSS](https://tailwindcss.com/)
- Voice recognition from [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

---

**Made with ❤️ for movie lovers everywhere** 🍿
