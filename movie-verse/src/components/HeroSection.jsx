import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

function HeroSection() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`
        );
        const data = await res.json();
        // Pick a random trending movie
        const randomMovie =
          data.results[Math.floor(Math.random() * data.results.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, []);

  if (!movie) {
    return (
      <section className="h-screen bg-black flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </section>
    );
  }

  // ✅ use backdrop_path if available, otherwise fallback to poster_path
  const backgroundImage = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  return (
    <section className="relative h-screen bg-black text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 h-full flex flex-col justify-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {movie.title || movie.name}
        </h1>
        <p className="mt-4 text-gray-300 text-lg md:text-xl line-clamp-3">
          {movie.overview}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="flex items-center gap-2 bg-xanthous text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition">
            <FaPlay /> Watch Now
          </button>
          <button className="border border-gray-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
