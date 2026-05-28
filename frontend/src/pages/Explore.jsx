import { useEffect, useMemo, useState } from "react";
import Fuse from "fuse.js";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { CircleUserRound, Film, Globe, Mail, Share2Icon } from "lucide-react";
import { NavLink } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const Explore = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");
  const [mediaFilter, setMediaFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("movie-watchlist") || "[]");
    } catch {
      return [];
    }
  });

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const searchTerm = input.trim();

  useEffect(() => {
    localStorage.setItem("movie-watchlist", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (transcript && !listening) {
      setInput(transcript);
    }
  }, [transcript, listening]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const endpoint = searchTerm
          ? `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(searchTerm)}&page=${page}`
          : `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${page}`;

        const res = await fetch(endpoint);
        const result = await res.json();
        const apiResults = result.results || [];

        if (apiResults.length > 0) {
          setData(apiResults);
          return;
        }

        setData([]);
      } catch (err) {
        setError(err.message || "Something went wrong while fetching movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, searchTerm]);

  const handleViewDetails = async (movie) => {
    try {
      setSelectedMovie(movie);
      setDetailsLoading(true);

      const mediaType = movie.media_type === "tv" ? "tv" : "movie";

      const detailsEndpoint = `https://api.themoviedb.org/3/${mediaType}/${movie.id}?api_key=${API_KEY}`;

      const creditsEndpoint = `https://api.themoviedb.org/3/${mediaType}/${movie.id}/credits?api_key=${API_KEY}`;

      const videosEndpoint = `https://api.themoviedb.org/3/${mediaType}/${movie.id}/videos?api_key=${API_KEY}`;

      const [detailsRes, creditsRes, videosRes] = await Promise.all([
        fetch(detailsEndpoint),
        fetch(creditsEndpoint),
        fetch(videosEndpoint),
      ]);

      const detailsData = await detailsRes.json();
      const creditsData = await creditsRes.json();
      const videosData = await videosRes.json();

      setMovieDetails(detailsData);

      setCast(creditsData.cast?.slice(0, 8) || []);

      const trailerVideo = videosData.results?.find(
        (v) => v.type === "Trailer" && v.site === "YouTube",
      );

      setTrailer(trailerVideo || null);
    } catch (err) {
      console.log(err);
    } finally {
      setDetailsLoading(false);
    }
  };

  const fuse = useMemo(
    () =>
      new Fuse(data, {
        keys: ["title", "name"],
        threshold: 0.4,
      }),
    [data],
  );

  const filteredData = (
    searchTerm ? fuse.search(searchTerm).map((result) => result.item) : data
  ).filter((item) => {
    const genreMatch =
      genreFilter === "All" ||
      (item.genre_ids && item.genre_ids.includes(Number(genreFilter)));

    const mediaMatch = mediaFilter === "All" || item.media_type === mediaFilter;

    return genreMatch && mediaMatch;
  });

  const isFavorite = (item) =>
    favorites.some(
      (fav) => fav.id === item.id && fav.media_type === item.media_type,
    );

  const toggleFavorite = (item) => {
    const safeItem = {
      id: item.id,
      title: item.title || item.name,
      name: item.name,
      media_type: item.media_type || "movie",
      poster_path: item.poster_path,
      vote_average: item.vote_average,
    };

    setFavorites((prev) => {
      const exists = prev.some(
        (fav) =>
          fav.id === safeItem.id && fav.media_type === safeItem.media_type,
      );

      return exists
        ? prev.filter(
            (fav) =>
              !(
                fav.id === safeItem.id && fav.media_type === safeItem.media_type
              ),
          )
        : [...prev, safeItem];
    });
  };

  if (!browserSupportsSpeechRecognition) {
    return <h2>Voice search not supported.</h2>;
  }
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-red-600/15 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:80px_80px] opacity-20" />
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <div className="border-b border-white/10 bg-black/30 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-14">
            <h1 className="text-5xl font-black tracking-wide mb-4">
              Explore Cinema
            </h1>

            <p className="text-zinc-400 max-w-xl mb-8">
              Discover trending movies, series, and binge-worthy stories.
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <input
                type="text"
                placeholder="Search movie or series..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full md:w-[450px] bg-zinc-900 border border-zinc-700 px-5 py-3 rounded-xl outline-none focus:border-red-500 transition"
              />

              <select
                value={genreFilter}
                onChange={(e) => setGenreFilter(e.target.value)}
                className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-red-500"
                aria-label="Filter by genre"
              >
                <option value="All">All genres</option>
                <option value="28">Action</option>
                <option value="10749">Romance</option>
                <option value="18">Drama</option>
                <option value="35">Comedy</option>
              </select>

              <select
                value={mediaFilter}
                onChange={(e) => setMediaFilter(e.target.value)}
                className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-red-500"
                aria-label="Filter by media type"
              >
                <option value="All">All types</option>
                <option value="movie">Movies</option>
                <option value="tv">Series</option>
              </select>

              <button
                onClick={() => {
                  setInput("");
                  resetTranscript();
                  SpeechRecognition.startListening({
                    continuous: false,
                    language: "en-US",
                  });
                }}
                className={`px-5 py-3 rounded-xl font-bold transition ${
                  listening
                    ? "bg-red-600 animate-pulse"
                    : "bg-zinc-800 hover:bg-red-600"
                }`}
              >
                {listening ? "🎙 Listening..." : "🎤 Speak"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="flex justify-center py-24">
          <h2 className="text-2xl animate-pulse text-red-400">
            Loading Cinema...
          </h2>
        </div>
      )}

      {/* ERROR */}
      {error && (
        <div className="text-center text-red-500 py-12">Error: {error}</div>
      )}

      {/* CARDS */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {/* showing all the data  */}

          {filteredData.map((e) => (
            <div
              key={e.id}
              className="group bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-600/20 transition duration-300 hover:scale-[1.03]"
            >
              <div className="overflow-hidden relative">
                <img
                  src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                  alt={e.title || e.name}
                  className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-500"
                />

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleFavorite(e);
                  }}
                  className="absolute right-3 top-3 z-10 rounded-full bg-black/70 p-2 text-xl text-white shadow-lg transition hover:bg-red-600"
                  aria-label={
                    isFavorite(e)
                      ? "Remove from favourites"
                      : "Add to favourites"
                  }
                >
                  {isFavorite(e) ? "♥" : "♡"}
                </button>

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <button
                    onClick={() => handleViewDetails(e)}
                    className="bg-red-600 px-5 py-3 rounded-xl font-bold hover:bg-red-700"
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h2 className="font-bold text-lg line-clamp-1">
                  {e.title || e.name}
                </h2>

                <div className="flex justify-between items-center mt-3 text-sm">
                  <span className="text-yellow-400">
                    ⭐ {e.vote_average?.toFixed(1)}
                  </span>

                  <span className="text-zinc-400 uppercase">
                    {e.media_type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}

        <div className="flex justify-center gap-5 mt-16">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-red-600 disabled:opacity-40 transition"
          >
            Previous
          </button>

          <span className="flex items-center text-lg font-bold text-red-400">
            Page {page}
          </span>

          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-red-600 transition"
          >
            Next
          </button>
        </div>
      </div>

      {/* view details buttons */}

      {selectedMovie && (
        <div
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-6 overflow-y-auto"
          onClick={() => {
            setSelectedMovie(null);
            setMovieDetails(null);
            setTrailer(null);
          }}
        >
          <div
            className="bg-zinc-900 rounded-3xl overflow-hidden max-w-6xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close details"
              onClick={() => {
                setSelectedMovie(null);
                setMovieDetails(null);
                setTrailer(null);
              }}
              className="absolute top-3 right-3 z-50 rounded-full border border-white/10 bg-red-600/95 p-3 text-2xl text-white shadow-lg transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              ✕
            </button>

            {detailsLoading ? (
              <div className="p-20 text-center text-2xl">
                Loading Details...
              </div>
            ) : (
              movieDetails && (
                <>
                  <div className="relative">
                    <img
                      src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
                      className="w-full h-[350px] object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                  </div>

                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-10">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                        className="w-[260px] rounded-2xl shadow-xl"
                      />

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <h2 className="text-5xl font-black">
                            {movieDetails.title || movieDetails.name}
                          </h2>

                          <button
                            type="button"
                            onClick={() =>
                              toggleFavorite(selectedMovie || movieDetails)
                            }
                            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                              isFavorite(selectedMovie || movieDetails)
                                ? "border-red-500 bg-red-600 text-white"
                                : "border-zinc-700 bg-zinc-800 text-zinc-100 hover:border-red-500 hover:text-red-200"
                            }`}
                          >
                            {isFavorite(selectedMovie || movieDetails)
                              ? "♥ Saved"
                              : "♡ Add to Favourites"}
                          </button>
                        </div>

                        <p className="text-zinc-400 leading-relaxed mb-6">
                          {movieDetails.overview}
                        </p>

                        <div className="flex flex-wrap gap-3 mb-6">
                          {movieDetails.genres?.map((g) => (
                            <span
                              key={g.id}
                              className="bg-red-600 px-4 py-2 rounded-full text-sm"
                            >
                              {g.name}
                            </span>
                          ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-5 text-zinc-300 mb-8">
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
                              movieDetails.episode_run_time?.[0]}
                            mins
                          </p>

                          <p>🌐 Language: {movieDetails.original_language}</p>

                          <p>🎬 Status: {movieDetails.status}</p>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Cast</h3>

                        <div className="flex flex-wrap gap-3 mb-8">
                          {cast.map((actor) => (
                            <span
                              key={actor.id}
                              className="bg-zinc-800 px-4 py-2 rounded-full"
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
                            className="inline-block bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold transition"
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
                Discover trending movies, build your personal watchlist, and
                explore cinematic worlds from Hollywood to beyond.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">
                Navigation
              </h3>

              <ul className="space-y-4 text-zinc-400">
                <li className="hover:text-red-500 transition cursor-pointer">
                  <NavLink to="/">Home</NavLink>
                </li>

                <li className="hover:text-red-500 transition cursor-pointer">
                  <NavLink to="/explore">Explore</NavLink>
                </li>

                <li className="hover:text-red-500 transition cursor-pointer">
                  <NavLink to="/favourites">Favourites</NavLink>
                </li>

                <li className="hover:text-red-500 transition cursor-pointer">
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
            </div>

            {/* Genres */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">
                Popular Genres
              </h3>

              <ul className="space-y-4 text-zinc-400">
                <li className="hover:text-purple-400 transition">Sci-Fi</li>

                <li className="hover:text-purple-400 transition">Action</li>

                <li className="hover:text-purple-400 transition">Thriller</li>

                <li className="hover:text-purple-400 transition">Adventure</li>

                <li className="hover:text-purple-400 transition">Drama</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Connect</h3>

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

export default Explore;
