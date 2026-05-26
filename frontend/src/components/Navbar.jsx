import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Film,
  Home,
  Compass,
  Heart,
  Info,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navStyle = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition duration-300
    ${
      isActive
        ? "bg-red-600 text-white shadow-lg"
        : "text-zinc-300 hover:bg-zinc-800 hover:text-red-400"
    }`;

  return (
    <nav className="bg-zinc-950 border-b border-zinc-800 sticky top-0 z-50 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <Film className="text-red-500 w-8 h-8" />

            <h1 className="text-2xl font-bold text-white tracking-wide">
              MovieWatch
            </h1>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">

            <NavLink to="/" className={navStyle}>
              <Home size={18} />
              Home
            </NavLink>

            <NavLink to="/explore" className={navStyle}>
              <Compass size={18} />
              Explore
            </NavLink>

            <NavLink to="/favourites" className={navStyle}>
              <Heart size={18} />
              Favourites
            </NavLink>

            <NavLink to="/about" className={navStyle}>
              <Info size={18} />
              About
            </NavLink>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-zinc-300 hover:text-red-500"
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col gap-3 shadow-xl">

            <NavLink
              to="/"
              className={navStyle}
              onClick={() => setMenuOpen(false)}
            >
              <Home size={18} />
              Home
            </NavLink>

            <NavLink
              to="/explore"
              className={navStyle}
              onClick={() => setMenuOpen(false)}
            >
              <Compass size={18} />
              Explore
            </NavLink>

            <NavLink
              to="/favourites"
              className={navStyle}
              onClick={() => setMenuOpen(false)}
            >
              <Heart size={18} />
              Favourites
            </NavLink>

            <NavLink
              to="/about"
              className={navStyle}
              onClick={() => setMenuOpen(false)}
            >
              <Info size={18} />
              About
            </NavLink>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;