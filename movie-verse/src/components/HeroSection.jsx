import React, { useState, useEffect } from "react";
import { fetchFromTMDB } from "../utils/api";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import Loader from "./Loader";
import Button from "./Button";
import useMovieStore from "../store/useMoviesStore";

function HeroSection() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const setSelectedMovie = useMovieStore((s) => s.setSelectedMovie);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError(null);

      const cacheKey = "heroMovie";
      const cacheExpiryKey = "heroMovieExpiry";
      const cacheData = sessionStorage.getItem(cacheKey);
      const cacheExpiry = sessionStorage.getItem(cacheExpiryKey);

      if (cacheData && cacheExpiry && Date.now() < parseInt(cacheExpiry, 10)) {
        setMovie(JSON.parse(cacheData));
        setLoading(false);
        return;
      }

      try {
        const data = await fetchFromTMDB("/trending/movie/day");
        if (data?.results.length) {
          const randomMovie =
            data.results[Math.floor(Math.random() * data.results.length)];
          setMovie(randomMovie);

          // cache for 15mins
          sessionStorage.setItem(cacheKey, JSON.stringify(randomMovie));
          sessionStorage.setItem(
            cacheExpiryKey,
            (Date.now() + 15 * 60 * 1000).toString()
          );
        }
      } catch (err) {
        console.error("Error fetching hero movie:", err);
        setError("Failed to load hero movie. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, []);

  if (loading) {
    return (
      <section>
        <Loader />
      </section>
    );
  }

  if (error) {
    return (
      <section className="h-screen flex items-center justify-center text-white bg-black">
        <p>{error}</p>
      </section>
    );
  }

  if (!movie) return null;

  const backgroundImage = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
    : "/batman_superman.jpg";

  const handlePlayTrailer = async () => {
    if (!movie) return;
    try {
      const data = await fetchFromTMDB(`/movie/${movie.id}/videos`);
      const trailer = data.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );

      if (trailer) {
        window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
      } else {
        const query = encodeURIComponent(
          `${movie.title || movie.name} trailer`
        );
        window.open(
          `https://www.youtube.com/results?search_query=${query}`,
          "_blank"
        );
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  const handleDetails = () => {
    if (!movie) return;
    setSelectedMovie(movie.id);
  };

  return (
    <section className="relative h-screen bg-black text-white">
      <div
        className="absolute inset-0 bg-cover  bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="img"
        aria-label={movie.title || movie.name}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

      <div className="relative z-10 px-6 py-32 md:px-20 h-full flex flex-col justify-center max-w-3xl">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight font-serif">
          {movie.title || movie.name}
        </h1>
        <p className="mt-4 text-white text-lg md:text-xl line-clamp-3 font-mozzila">
          {movie.overview}
        </p>
        <div className="mt-6 flex gap-4">
          <Button onClick={handlePlayTrailer} aria-label="play trailer">
            <FaPlay /> Play Trailer
          </Button>
          <Button
            onClick={handleDetails}
            bg="border border-xanthous  hover:bg-xanthous/80 flex items-center gap-2  text-white px-6 py-3 rounded font-semibold shadow-lg" aria-label="view details"
          >
            <FaInfoCircle /> Details
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
