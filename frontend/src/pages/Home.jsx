import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  Film,
  Globe,
  Mail,
  CircleUserRound,
  Share2,
  Share,
  Share2Icon,
} from "lucide-react";

const movies = [
  "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
  "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
  "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
  "https://image.tmdb.org/t/p/w500/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
   // Interstellar
  "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",

  // Blade Runner 2049
  "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",

  // Dune
  "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",

  // The Batman
  "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",

  // Joker
  "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",

  // Oppenheimer
  "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",

  // Doctor Strange Multiverse
  "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",

  // Spider-Man No Way Home
  "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",

  // The Dark Knight
  "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",

  // John Wick 4
  "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",

  // Inception
  "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",

  // Avatar: The Way of Water
  "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",

  // Tron Legacy
  "https://image.tmdb.org/t/p/w500/9pkZesKMnblFfKxEhQx45YQ2kIe.jpg",

  // Tenet
  "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg",

  // Everything Everywhere All At Once
  "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",

  // Mad Max Fury Road
  "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
  
];

const hollywoodMovies = [

  // The Matrix
  "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",

  // Fight Club
  "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",

  // Parasite
  "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",

  // Whiplash
  "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",


  // Logan
  "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",

  // No Time To Die
  "https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",

  // The Wolf of Wall Street
  "https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",

  // Shutter Island
  "https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg",

  // Gravity
  "https://image.tmdb.org/t/p/w500/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg",

  // Arrival
  "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",


  // Edge of Tomorrow
  "https://image.tmdb.org/t/p/w500/uUHvlkLavotfGsNtosDy8ShsIYF.jpg",

  // Ready Player One
  "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",

];
const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <span className="bg-red-600 text-sm px-4 py-2 rounded-full font-semibold">
              🎬 Your Personal Movie Hub
            </span>

            <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
              Discover, Save & Track
              <span className="text-red-500"> Amazing Movies</span>
            </h1>

            <p className="text-zinc-400 text-lg mt-6 leading-relaxed">
              Explore trending movies, build your favourites list,
              and create your own ultimate watchlist experience.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <Link
  to="/explore"
  className="bg-red-600 hover:bg-red-700 px-7 py-3 rounded-xl font-semibold transition duration-300 shadow-lg inline-block"
>
  Explore Movies
</Link>

              <Link to="/favourites" className="border border-zinc-700 hover:border-red-500 hover:text-red-400 px-7 py-3 rounded-xl font-semibold transition duration-300">
                My Watchlist
              </Link>

            </div>

          </div>

          {/* Right Content */}
          <div className="relative">

            <div className="bg-gradient-to-br from-red-600/20 to-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
                alt="movie"
                className="rounded-2xl object-cover w-full h-[450px]"
              />

            </div>

          </div>

        </div>

      </section>

     {/* ---------- SECTION 1 ---------- */}

<section className="relative overflow-hidden py-20 bg-zinc-950">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12),transparent_70%)]"></div>

  {/* Edge Fade */}
  <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
  <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>

  <h2 className="relative z-20 text-center text-5xl font-bold text-white mb-12 tracking-wide">
    Featured <span className="text-red-500">Movies</span>
  </h2>

  <div className="flex w-max animate-[scroll_55s_linear_infinite] gap-10">

    {[...movies, ...movies].map((movie,index)=>(
      <img
        key={index}
        src={movie}
        alt="movie"
        className="
          w-56 h-84
          object-cover
          rounded-[28px]
          border border-zinc-800
          shadow-[0_0_35px_rgba(239,68,68,0.18)]
          hover:scale-110
          hover:-rotate-2
          hover:shadow-[0_0_60px_rgba(168,85,247,0.45)]
          transition-all duration-500
          cursor-pointer
        "
      />
    ))}

  </div>

</section>

{/* ---------- SECTION 2 ---------- */}

<section className="relative overflow-hidden py-20 bg-zinc-950">

  {/* Purple Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.10),transparent_70%)]"></div>

  {/* Edge Fade */}
  <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
  <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>

  <h2 className="relative z-20 text-center text-5xl font-bold text-white mb-12 tracking-wide">
    Hollywood <span className="text-purple-500">Collection</span>
  </h2>

  {/* Reverse direction for cinematic feel */}
  <div className="flex w-max animate-[scroll_65s_linear_infinite_reverse] gap-10">

    {[...hollywoodMovies, ...hollywoodMovies].map((movie,index)=>(
      <img
        key={index}
        src={movie}
        alt="movie"
        className="
          w-56 h-84
          object-cover
          rounded-[28px]
          border border-zinc-800
          shadow-[0_0_35px_rgba(168,85,247,0.18)]
          hover:scale-110
          hover:rotate-2
          hover:shadow-[0_0_70px_rgba(239,68,68,0.45)]
          transition-all duration-500
          cursor-pointer
        "
      />
    ))}

  </div>

</section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-14">
          Why Use MovieWatch?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-red-500 transition duration-300">
            <div className="text-5xl mb-5">🍿</div>

            <h3 className="text-2xl font-semibold mb-3">
              Discover Movies
            </h3>

            <p className="text-zinc-400">
              Find trending, popular, and highly rated movies instantly.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-red-500 transition duration-300">
            <div className="text-5xl mb-5">❤️</div>

            <h3 className="text-2xl font-semibold mb-3">
              Save Favourites
            </h3>

            <p className="text-zinc-400">
              Keep all your favorite movies in one place.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-red-500 transition duration-300">
            <div className="text-5xl mb-5">⭐</div>

            <h3 className="text-2xl font-semibold mb-3">
              Build Watchlists
            </h3>

            <p className="text-zinc-400">
              Organize movies you plan to watch later.
            </p>
          </div>

        </div>

      </section>


      {/* ---------- FOOTER ---------- */}

<footer className="relative bg-zinc-950 border-t border-zinc-800 overflow-hidden">

  {/* Glow Background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12),transparent_70%)]"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-18">

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Brand */}
      <div>

        <div className="flex items-center gap-3 mb-6">

          <Film
            size={34}
            className="text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.7)]"
          />

          <h2 className="text-3xl font-bold tracking-wide">
            Movie<span className="text-red-500">Watch</span>
          </h2>

        </div>

        <p className="text-zinc-400 leading-relaxed">
          Discover trending movies, build your personal
          watchlist, and explore cinematic worlds from
          Hollywood to beyond.
        </p>

      </div>

      {/* Navigation */}
      <div>

        <h3 className="text-xl font-semibold mb-6 text-white">
          Navigation
        </h3>

        <ul className="space-y-4 text-zinc-400">

          <li className="hover:text-red-500 transition cursor-pointer">
            <NavLink to="/">
            Home
            </NavLink>
            
          </li>

          <li className="hover:text-red-500 transition cursor-pointer">
            <NavLink to="/explore">
            Explore
            </NavLink>
            
          </li>

          <li className="hover:text-red-500 transition cursor-pointer">
            <NavLink to="/favourites">
             Favourites
            </NavLink>
           
          </li>

          <li className="hover:text-red-500 transition cursor-pointer">
            <NavLink to="/about">
             About
            </NavLink>
           
          </li>

        </ul>

      </div>

      {/* Genres */}
      <div>

        <h3 className="text-xl font-semibold mb-6 text-white">
          Popular Genres
        </h3>

        <ul className="space-y-4 text-zinc-400">

          <li className="hover:text-purple-400 transition">
            Sci-Fi
          </li>

          <li className="hover:text-purple-400 transition">
            Action
          </li>

          <li className="hover:text-purple-400 transition">
            Thriller
          </li>

          <li className="hover:text-purple-400 transition">
            Adventure
          </li>

          <li className="hover:text-purple-400 transition">
            Drama
          </li>

        </ul>

      </div>

      {/* Social */}
      <div>

        <h3 className="text-xl font-semibold mb-6 text-white">
          Connect
        </h3>

        <p className="text-zinc-400 mb-6">
          Follow MovieWatch updates and new releases.
        </p>

        <div className="flex gap-5">

          <a
            href="/contact"
            className="bg-zinc-900 p-3 rounded-full border border-zinc-800 hover:border-red-500 hover:scale-110 transition-all duration-300"
          >
            <Globe className="text-zinc-300" />
          </a>

          <a
            href="/contact"
            className="bg-zinc-900 p-3 rounded-full border border-zinc-800 hover:border-red-500 hover:scale-110 transition-all duration-300"
          >
            <Mail className="text-zinc-300" />
          </a>

          <a
            href="/contact"
            className="bg-zinc-900 p-3 rounded-full border border-zinc-800 hover:border-red-500 hover:scale-110 transition-all duration-300"
          >
            <CircleUserRound className="text-zinc-300" />
          </a>

          <a
            href="/contact"
            className="bg-zinc-900 p-3 rounded-full border border-zinc-800 hover:border-red-500 hover:scale-110 transition-all duration-300"
          >
            <Share2Icon className="text-zinc-300" />
          </a>

        </div>

      </div>

    </div>

    {/* Bottom Section */}

    <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">

      <p className="text-zinc-500 text-sm">
        © 2026 MovieWatch • Built with React + Tailwind CSS
      </p>

      <div className="flex gap-6 text-sm text-zinc-500">

        <span className="hover:text-red-500 cursor-pointer transition">
          Privacy Policy
        </span>

        <span className="hover:text-red-500 cursor-pointer transition">
          Terms of Service
        </span>

        <span className="hover:text-red-500 cursor-pointer transition">
          Contact
        </span>

      </div>

    </div>

  </div>

</footer>

    </div>
  )
}

export default Home