import React from 'react'
import { Link } from 'react-router-dom'

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

    </div>
  )
}

export default Home