import { useEffect, useMemo, useState } from "react";
import Fuse from "fuse.js";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import {
  CircleUserRound,
  Clock3,
  Eye,
  Film,
  Globe,
  Mail,
  Mic,
  Search,
  Share2Icon,
  SlidersHorizontal,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const normalizeFavorite = (item) => ({
  ...item,
  media_type: item.media_type || "movie",
  addedAt: item.addedAt || Date.now(),
  watchStatus: item.watchStatus || "later",
});

const Favourites = () => {
  const [favorites, setFavorites] = useState(() => {
    try {
      return (
        JSON.parse(localStorage.getItem("movie-watchlist") || "[]") || []
      ).map(normalizeFavorite);
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [mediaFilter, setMediaFilter] = useState("All");
  const [watchFilter, setWatchFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const searchTerm = input.trim().toLowerCase();

  useEffect(() => {
    localStorage.setItem("movie-watchlist", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (transcript && !listening) {
      setInput(transcript);
    }
  }, [transcript, listening]);

  const removeFavorite = (item) => {
    setFavorites((prev) =>
      prev.filter(
        (fav) => !(fav.id === item.id && fav.media_type === item.media_type),
      ),
    );
  };

  const toggleWatchStatus = (item) => {
    const nextFavorites = favorites.map((fav) =>
      fav.id === item.id && fav.media_type === item.media_type
        ? {
            ...fav,
            watchStatus: fav.watchStatus === "watched" ? "later" : "watched",
          }
        : fav,
    );

    setFavorites(nextFavorites);

    const updatedItem = nextFavorites.find(
      (fav) => fav.id === item.id && fav.media_type === item.media_type,
    );

    setSelectedItem((current) =>
      current &&
      current.id === item.id &&
      current.media_type === item.media_type
        ? updatedItem || current
        : current,
    );
  };

  const handleViewDetails = async (item) => {
    try {
      setSelectedItem(item);
      setDetailsLoading(true);

      const mediaType = item.media_type === "tv" ? "tv" : "movie";
      const [detailsRes, creditsRes, videosRes] = await Promise.all([
        fetch(
          `https://api.themoviedb.org/3/${mediaType}/${item.id}?api_key=${API_KEY}`,
        ),
        fetch(
          `https://api.themoviedb.org/3/${mediaType}/${item.id}/credits?api_key=${API_KEY}`,
        ),
        fetch(
          `https://api.themoviedb.org/3/${mediaType}/${item.id}/videos?api_key=${API_KEY}`,
        ),
      ]);

      const [detailsData, creditsData, videosData] = await Promise.all([
        detailsRes.json(),
        creditsRes.json(),
        videosRes.json(),
      ]);

      setMovieDetails(detailsData);
      setCast(creditsData.cast?.slice(0, 8) || []);
      setTrailer(
        videosData.results?.find(
          (video) => video.type === "Trailer" && video.site === "YouTube",
        ) || null,
      );
    } catch (error) {
      console.error(error);
    } finally {
      setDetailsLoading(false);
    }
  };

  const fuse = useMemo(
    () =>
      new Fuse(favorites, {
        keys: ["title", "name", "media_type"],
        threshold: 0.35,
      }),
    [favorites],
  );

  const filteredFavorites = useMemo(() => {
    const baseList = searchTerm
      ? fuse.search(searchTerm).map((result) => result.item)
      : favorites;

    return baseList
      .filter((item) => {
        const mediaMatch =
          mediaFilter === "All" || item.media_type === mediaFilter;
        const watchMatch =
          watchFilter === "All" || item.watchStatus === watchFilter;
        return mediaMatch && watchMatch;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "rating":
            return (b.vote_average || 0) - (a.vote_average || 0);
          case "alphabetical":
            return (a.title || a.name || "").localeCompare(
              b.title || b.name || "",
            );
          case "recent":
          default:
            return (b.addedAt || 0) - (a.addedAt || 0);
        }
      });
  }, [favorites, fuse, mediaFilter, searchTerm, sortBy, watchFilter]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-red-600/15 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:80px_80px] opacity-20" />
      </div>

      <div className="relative z-10">
        <section className="border-b border-white/10 bg-black/30 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-red-400">
              Your curated watchlist
            </p>
            <h1 className="mb-4 text-5xl font-black tracking-wide">
              Favourites
            </h1>
            <p className="max-w-2xl text-zinc-400">
              Search your saved titles, sort them your way, and keep track of
              what you have watched or want to watch later.
            </p>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-8 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="flex flex-wrap items-center gap-3">
              <label className="flex flex-1 min-w-[260px] items-center gap-3 rounded-2xl border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-zinc-300 shadow-inner shadow-black/20">
                <Search size={18} className="text-red-400" />
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Search your favourites..."
                  className="w-full bg-transparent text-white outline-none placeholder:text-zinc-500"
                />
              </label>

              <button
                type="button"
                onClick={() => {
                  setInput("");
                  resetTranscript();
                  if (browserSupportsSpeechRecognition) {
                    SpeechRecognition.startListening({
                      continuous: false,
                      language: "en-US",
                    });
                  }
                }}
                className={`rounded-2xl px-4 py-3 font-semibold transition ${
                  listening
                    ? "bg-red-600 text-white shadow-lg shadow-red-500/30"
                    : "bg-zinc-800 text-zinc-100 hover:bg-red-600"
                }`}
                aria-label="Voice search favourites"
              >
                <Mic size={18} className={listening ? "animate-pulse" : ""} />
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-2xl border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none focus:border-red-500"
                aria-label="Sort favourites"
              >
                <option value="recent">Recently added</option>
                <option value="rating">Top rated</option>
                <option value="alphabetical">Alphabetically</option>
              </select>

              <select
                value={mediaFilter}
                onChange={(e) => setMediaFilter(e.target.value)}
                className="rounded-2xl border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none focus:border-red-500"
                aria-label="Filter by media type"
              >
                <option value="All">All types</option>
                <option value="movie">Movies only</option>
                <option value="tv">TV shows only</option>
              </select>

              <select
                value={watchFilter}
                onChange={(e) => setWatchFilter(e.target.value)}
                className="rounded-2xl border border-zinc-700 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none focus:border-red-500"
                aria-label="Filter watch status"
              >
                <option value="All">All statuses</option>
                <option value="watched">Already watched</option>
                <option value="later">Watch later</option>
              </select>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
              <SlidersHorizontal size={15} className="text-red-400" />
              {filteredFavorites.length} title
              {filteredFavorites.length === 1 ? "" : "s"} in your saved list
            </div>
          </div>

          {favorites.length === 0 ? (
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-10 text-center shadow-2xl shadow-black/30">
              <h2 className="text-2xl font-bold text-white">
                No favourites yet
              </h2>
              <p className="mt-3 text-zinc-400">
                Tap the heart on a movie or series card to save it here, then
                come back and manage your watchlist.
              </p>
              <NavLink
                to="/explore"
                className="mt-6 inline-flex items-center rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
              >
                Explore titles
              </NavLink>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filteredFavorites.map((item) => (
                <article
                  key={`${item.media_type}-${item.id}`}
                  className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/90 shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:shadow-red-500/10"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.title || item.name}
                      className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleWatchStatus(item);
                      }}
                      className={`absolute left-3 top-3 z-10 rounded-full border border-white/10 bg-black/75 p-2 text-white shadow-lg transition hover:bg-emerald-600 ${
                        item.watchStatus === "watched"
                          ? "bg-emerald-600/90"
                          : ""
                      }`}
                      aria-label={
                        item.watchStatus === "watched"
                          ? "Mark as watch later"
                          : "Mark as watched"
                      }
                    >
                      {item.watchStatus === "watched" ? (
                        <Eye size={16} />
                      ) : (
                        <Clock3 size={16} />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        removeFavorite(item);
                      }}
                      className="absolute right-3 top-3 z-10 rounded-full bg-black/75 p-2 text-xl text-white shadow-lg transition hover:bg-red-600"
                      aria-label="Remove from favourites"
                    >
                      ♥
                    </button>

                    <div className="absolute inset-0 z-0 flex items-end justify-center bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                      <button
                        type="button"
                        onClick={() => handleViewDetails(item)}
                        className="rounded-full bg-red-600 px-5 py-3 font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700"
                      >
                        View Details
                      </button>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white line-clamp-1">
                      {item.title || item.name}
                    </h3>
                    <div className="mt-3 flex items-center justify-between text-sm text-zinc-300">
                      <span className="text-yellow-400">
                        ⭐ {item.vote_average?.toFixed(1) || "0.0"}
                      </span>
                      <span className="uppercase text-zinc-400">
                        {item.media_type}
                      </span>
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-zinc-500">
                      {item.watchStatus === "watched"
                        ? "Already watched"
                        : "Watch later"}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>

        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/90 p-6"
            onClick={() => {
              setSelectedItem(null);
              setMovieDetails(null);
              setTrailer(null);
              setCast([]);
            }}
          >
            <div
              className="relative w-full max-w-6xl overflow-hidden rounded-3xl bg-zinc-900"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close details"
                onClick={() => {
                  setSelectedItem(null);
                  setMovieDetails(null);
                  setTrailer(null);
                  setCast([]);
                }}
                className="absolute right-3 top-3 z-50 rounded-full border border-white/10 bg-red-600/95 p-3 text-2xl text-white shadow-lg transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                ✕
              </button>

              {detailsLoading ? (
                <div className="p-20 text-center text-2xl text-zinc-200">
                  Loading details…
                </div>
              ) : (
                movieDetails && (
                  <>
                    <div className="relative">
                      <img
                        src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
                        alt={movieDetails.title || movieDetails.name}
                        className="h-[350px] w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                    </div>

                    <div className="p-8">
                      <div className="flex flex-col gap-10 lg:flex-row">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                          alt={movieDetails.title || movieDetails.name}
                          className="w-[260px] rounded-2xl shadow-xl"
                        />

                        <div className="flex-1">
                          <div className="mb-4 flex items-start justify-between gap-4">
                            <h2 className="text-4xl font-black text-white md:text-5xl">
                              {movieDetails.title || movieDetails.name}
                            </h2>
                            <button
                              type="button"
                              onClick={() => toggleWatchStatus(selectedItem)}
                              className="rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-red-500 hover:text-red-200"
                            >
                              {selectedItem.watchStatus === "watched"
                                ? "✓ Watched"
                                : "⏳ Watch later"}
                            </button>
                          </div>

                          <p className="mb-6 text-zinc-300 leading-relaxed">
                            {movieDetails.overview}
                          </p>

                          <div className="mb-6 flex flex-wrap gap-3">
                            {movieDetails.genres?.map((genre) => (
                              <span
                                key={genre.id}
                                className="rounded-full bg-red-600 px-4 py-2 text-sm text-white"
                              >
                                {genre.name}
                              </span>
                            ))}
                          </div>

                          <div className="mb-8 grid gap-5 text-zinc-300 md:grid-cols-2">
                            <p>
                              ⭐ Rating: {movieDetails.vote_average?.toFixed(1)}
                            </p>
                            <p>
                              📅 Release:{" "}
                              {movieDetails.release_date ||
                                movieDetails.first_air_date}
                            </p>
                            <p>
                              ⏱ Runtime:{" "}
                              {movieDetails.runtime ||
                                movieDetails.episode_run_time?.[0] ||
                                "—"}{" "}
                              mins
                            </p>
                            <p>🌐 Language: {movieDetails.original_language}</p>
                            <p>🎬 Status: {movieDetails.status}</p>
                          </div>

                          <h3 className="mb-4 text-2xl font-bold text-white">
                            Cast
                          </h3>
                          <div className="mb-8 flex flex-wrap gap-3">
                            {cast.map((actor) => (
                              <span
                                key={actor.id}
                                className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-200"
                              >
                                {actor.name}
                              </span>
                            ))}
                          </div>

                          {trailer && (
                            <a
                              href={`https://www.youtube.com/watch?v=${trailer.key}`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-block rounded-xl bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700"
                            >
                              ▶ Watch Trailer
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )
              )}
            </div>
          </div>
        )}

        <footer className="relative border-t border-zinc-800 bg-zinc-950/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12),transparent_70%)]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <Film
                    size={34}
                    className="text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.7)]"
                  />
                  <h2 className="text-3xl font-bold tracking-wide">
                    Movie<span className="text-red-500">Watch</span>
                  </h2>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Discover trending movies, build your personal watchlist, and
                  explore cinematic worlds from Hollywood to beyond.
                </p>
              </div>

              <div>
                <h3 className="mb-6 text-xl font-semibold text-white">
                  Navigation
                </h3>
                <ul className="space-y-4 text-zinc-400">
                  <li>
                    <NavLink to="/" className="hover:text-red-500 transition">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/explore"
                      className="hover:text-red-500 transition"
                    >
                      Explore
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/favourites"
                      className="hover:text-red-500 transition"
                    >
                      Favourites
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className="hover:text-red-500 transition"
                    >
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-6 text-xl font-semibold text-white">
                  Popular Genres
                </h3>
                <ul className="space-y-4 text-zinc-400">
                  <li>Sci-Fi</li>
                  <li>Action</li>
                  <li>Thriller</li>
                  <li>Adventure</li>
                  <li>Drama</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-6 text-xl font-semibold text-white">
                  Connect
                </h3>
                <p className="mb-6 text-zinc-400">
                  Follow MovieWatch updates and new releases.
                </p>
                <div className="flex gap-5">
                  <a
                    href="/contact"
                    className="rounded-full border border-zinc-800 bg-zinc-900 p-3 transition hover:border-red-500 hover:scale-110"
                  >
                    <Globe className="text-zinc-300" />
                  </a>
                  <a
                    href="/contact"
                    className="rounded-full border border-zinc-800 bg-zinc-900 p-3 transition hover:border-red-500 hover:scale-110"
                  >
                    <Mail className="text-zinc-300" />
                  </a>
                  <a
                    href="/contact"
                    className="rounded-full border border-zinc-800 bg-zinc-900 p-3 transition hover:border-red-500 hover:scale-110"
                  >
                    <CircleUserRound className="text-zinc-300" />
                  </a>
                  <a
                    href="/contact"
                    className="rounded-full border border-zinc-800 bg-zinc-900 p-3 transition hover:border-red-500 hover:scale-110"
                  >
                    <Share2Icon className="text-zinc-300" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-zinc-800 pt-8 text-sm text-zinc-500 md:flex-row">
              <p>© 2026 MovieWatch • Built with React + Tailwind CSS</p>
              <div className="flex gap-6">
                <span className="transition hover:text-red-500 cursor-pointer">
                  Privacy Policy
                </span>
                <span className="transition hover:text-red-500 cursor-pointer">
                  Terms of Service
                </span>
                <span className="transition hover:text-red-500 cursor-pointer">
                  Contact
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Favourites;
