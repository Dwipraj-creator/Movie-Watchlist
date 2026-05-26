import React from "react";
import {
  Film,
  Heart,
  Star,
  Tv,

  Mail,
  CircleUser,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Hero Section */}
        <section className="text-center">

          <div className="flex justify-center mb-6">
            <Film size={70} className="text-red-500" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold">
            About <span className="text-red-500">MovieWatch</span>
          </h1>

          <p className="text-zinc-400 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            MovieWatch is your personal movie companion.
            Discover films, create watchlists, save favourites,
            and organize your entertainment journey in one place.
          </p>

        </section>

        {/* Feature Cards */}
        <section className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-500 transition duration-300">

            <Tv className="text-red-500 mb-5" size={40} />

            <h2 className="text-2xl font-bold mb-4">
              Discover Content
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              Explore trending, popular, and highly rated movies
              from different genres and categories.
            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-500 transition duration-300">

            <Heart className="text-red-500 mb-5" size={40} />

            <h2 className="text-2xl font-bold mb-4">
              Save Favourites
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              Build your personal collection of favourite movies
              and keep everything organized.
            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-500 transition duration-300">

            <Star className="text-red-500 mb-5" size={40} />

            <h2 className="text-2xl font-bold mb-4">
              Build Watchlists
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              Never forget a movie recommendation again.
              Create custom watchlists for later viewing.
            </p>

          </div>

        </section>

        {/* Story Section */}
        <section className="mt-24">

          <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-10 shadow-xl">

            <h2 className="text-4xl font-bold mb-8">
              Our Mission
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              We believe finding great movies should be simple,
              beautiful, and enjoyable. MovieWatch was built to
              help movie lovers track what they love, discover
              new experiences, and manage their entertainment
              choices effortlessly.
            </p>

          </div>

        </section>

        {/* Developer Section */}
        <section className="mt-24 text-center">

          <h2 className="text-4xl font-bold mb-10">
            Built With ❤️
          </h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 max-w-3xl mx-auto">

            <div className="w-28 h-28 bg-red-600 rounded-full mx-auto flex items-center justify-center text-4xl font-bold">
              DD
            </div>

            <h3 className="text-3xl font-bold mt-6">
              Dwipraj Dey
            </h3>

            <p className="text-zinc-400 mt-4">
              React Developer • UI Builder • Movie Enthusiast
            </p>

            <div className="flex justify-center gap-6 mt-8">

              <Link to="https://github.com/Dwipraj-creator" className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-5 py-3 rounded-xl transition">
                <CircleUser size={20} />
                Github
              </Link>

              <Link to="/contact" className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl transition">
                <Mail size={20} />
                Contact
              </Link>

            </div>

          </div>

        </section>

      </div>
    </div>
  );
};

export default About;