import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams(); // imdbID from URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${id}&plot=full`);
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error("Error fetching movie details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading movie...</p>;
  if (!movie) return <p className="text-center text-red-500">Movie not found.</p>;

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
        alt={movie.Title}
        className="w-full md:w-1/3 object-cover rounded-lg shadow"
      />
      <div>
        <h1 className="text-3xl font-bold">{movie.Title}</h1>
        <p className="text-gray-500">{movie.Year} • {movie.Runtime} • {movie.Genre}</p>
        <p className="mt-4">{movie.Plot}</p>
        <p className="mt-2 font-semibold">Director: {movie.Director}</p>
        <p className="mt-1 font-semibold">Actors: {movie.Actors}</p>
        <p className="mt-1 font-semibold">IMDB Rating: {movie.imdbRating}</p>
      </div>
    </div>
  );
}
