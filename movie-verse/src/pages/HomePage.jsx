import React from "react";
import useMoviesStore from "../store/useMoviesStore";
import Loader from "../components/Loader"
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

function HomePage() {
  const { movies, loading, error, fetchPopularMovies } = useMoviesStore();

  useEffect(() => {
    fetchPopularMovies();
  }, [fetchPopularMovies]);

  // if (loading) return <p className="text-white p-6">loading...</p>;
  if (error) return <p className="text-white p-6">Error: {error}</p>;
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
      {loading ?(<Loader />): (
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <li key={movie.id} className="bg-gray-800 shadow-lg shadow-skyblue/20  rounded">
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}

export default HomePage;
