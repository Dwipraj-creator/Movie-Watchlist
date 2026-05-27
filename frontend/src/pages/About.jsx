import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Film,
  Sparkles,
  Crown,
  ShieldCheck,
  CircleUserRound,
  MessageSquare,
  Share2Icon,
  Mail,
  Globe,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">

      {/* Background Glow */}

      <div className="fixed inset-0 -z-10">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/10 blur-[160px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[160px]" />

      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* HERO SECTION */}

        <section className="text-center">

          <div className="flex justify-center mb-8">

            <div className="bg-red-500/10 p-6 rounded-3xl border border-red-500/20">

              <Film
                size={70}
                className="text-red-500"
              />

            </div>

          </div>

          <span className="bg-zinc-900 border border-zinc-800 text-red-400 px-5 py-2 rounded-full text-sm tracking-wider uppercase">

            About MovieWatch

          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight">

            The Ultimate
            <span className="text-red-500"> Movie Experience</span>

          </h1>

          <p className="text-zinc-400 text-lg md:text-xl mt-8 max-w-3xl mx-auto leading-relaxed">

            MovieWatch helps movie lovers discover incredible films,
            build watchlists, organize favourites, and enjoy a
            beautiful cinematic browsing experience.

          </p>

        </section>

        {/* PREMIUM FEATURES */}

        <section className="mt-28">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold">

              Designed For
              <span className="text-red-500"> Movie Lovers</span>

            </h2>

            <p className="text-zinc-500 max-w-2xl mx-auto mt-6 text-lg">

              A modern streaming-inspired interface built
              for discovery, organization, and immersive browsing.

            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* CARD 1 */}

            <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-10 hover:border-red-500 transition-all duration-500">

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-red-500/[0.04] transition" />

              <div className="relative">

                <div className="bg-red-500/10 w-fit p-4 rounded-2xl mb-8">

                  <Sparkles
                    size={34}
                    className="text-red-500"
                  />

                </div>

                <h3 className="text-3xl font-bold mb-5">

                  Smart Discovery

                </h3>

                <p className="text-zinc-400 leading-relaxed text-lg">

                  Explore trending movies, hidden gems,
                  critically acclaimed masterpieces,
                  and unforgettable cinematic experiences.

                </p>

              </div>

            </div>

            {/* CARD 2 */}

            <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-10 hover:border-purple-500 transition-all duration-500">

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-purple-500/[0.04] transition" />

              <div className="relative">

                <div className="bg-purple-500/10 w-fit p-4 rounded-2xl mb-8">

                  <Crown
                    size={34}
                    className="text-purple-400"
                  />

                </div>

                <h3 className="text-3xl font-bold mb-5">

                  Personal Collections

                </h3>

                <p className="text-zinc-400 leading-relaxed text-lg">

                  Save favourites, organize watchlists,
                  and create your own curated library
                  of cinematic treasures.

                </p>

              </div>

            </div>

            {/* CARD 3 */}

            <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-10 hover:border-emerald-500 transition-all duration-500">

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-emerald-500/[0.04] transition" />

              <div className="relative">

                <div className="bg-emerald-500/10 w-fit p-4 rounded-2xl mb-8">

                  <ShieldCheck
                    size={34}
                    className="text-emerald-400"
                  />

                </div>

                <h3 className="text-3xl font-bold mb-5">

                  Seamless Experience

                </h3>

                <p className="text-zinc-400 leading-relaxed text-lg">

                  Built with performance, responsiveness,
                  and elegant UI design for effortless
                  movie exploration.

                </p>

              </div>

            </div>

          </div>

        </section>

        {/* MISSION SECTION */}

        <section className="mt-28">

          <div className="rounded-[40px] overflow-hidden border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 p-12 shadow-2xl">

            <h2 className="text-5xl font-bold mb-10">

              Our Mission

            </h2>

            <p className="text-zinc-400 text-xl leading-relaxed max-w-4xl">

              We believe discovering movies should feel exciting,
              immersive, and effortless. MovieWatch was created
              to help users organize what they love, explore new
              stories, and enjoy a premium entertainment experience.

            </p>

          </div>

        </section>

        {/* DEVELOPER SECTION */}

        <section className="mt-28 text-center">

          <h2 className="text-5xl font-bold mb-14">

            Built With
            <span className="text-red-500"> Passion</span>

          </h2>

          <div className="max-w-4xl mx-auto rounded-[40px] border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl p-12">

            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mx-auto text-5xl font-black shadow-[0_0_40px_rgba(239,68,68,0.4)]">

              DD

            </div>

            <h3 className="text-4xl font-bold mt-8">

              Dwipraj Dey

            </h3>

            <p className="text-zinc-400 text-lg mt-5">

              React Developer • UI Builder • Movie Enthusiast

            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">

              <a
                href="https://github.com/Dwipraj-creator"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 px-7 py-4 rounded-2xl transition duration-300"
              >

                <CircleUserRound size={22} />

                Github

              </a>

              <Link
                to="/contact"
                className="flex items-center gap-3 bg-red-600 hover:bg-red-700 px-7 py-4 rounded-2xl transition duration-300 shadow-lg"
              >

                <MessageSquare size={22} />

                Contact

              </Link>

            </div>

          </div>

        </section>

      </div>
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
  );
};

export default About;