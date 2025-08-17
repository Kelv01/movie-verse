import React, { useEffect, useState } from "react";
import useSearchStore from "./utils/useSearchStore";
import { Link } from "react-router-dom";

function HomePage() {
  // const { movies, loading, error } = useSearchStore();
  const fetchMovies = useSearchStore((state) => state.fetchMovies);
  const [allmovies, setAllmovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const keywords = [
    "Batman",
    "Spiderman",
    "Avengers",
    "Matrix",
    "17 again",
    "airforce one",
  ];

  useEffect(() => {
    const loadMovies = async () => {
      try {
        let results = [];
        for (let term of keywords) {
          const movies = await fetchMovies(term, true);
          results = [...results, ...movies];
        }
        setAllmovies(results);
      } catch (err) {
        console.error("Error fetching movies:", err)
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-gray-500">{error}</p>;
  if (!allmovies || allmovies.length === 0) {
    return <p className="text-center text-gray-400">No movies found</p>;
  }

  return (
    <>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-raisingblack">
          Search Results
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
          {allmovies.map((movie) => (
            <Link
              key={movie.imdbID}
              to={`/movie/${movie.imdbID}`}
              className="bg-xanthous rounded-lg shadow hover:shadow-lg
              transition duration-200 overflow-hidden"
            >
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={movie.Title}
                className="w-full h-56 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-lg truncate">
                  {movie.Title}
                </h3>
                <p className="text-sm text-white">{movie.Year}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <div className='p-6'>
      <h2 className='text-2xl font-bold mb-6'> Search Results</h2>
     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
      {movies.map((movie) =>(
        <div 
        key={movie.imdbID} 
        className='bg-white rounded-lg shadow-lg hover:shadow-lg transition duration-200 overflow-hidden'>
          
          <div>
          <img src={movie.poster !== "N/A" ? movie.poster : "http://www.omdbapi.com/?apikey=[yourkey]&" } alt={movie.Title} />
        </div>

        <div className='p-3'>
          <h3 className='font-semibold text-lg truncate'>{movie.Title}</h3>
          <p className='text-sm text-gray-500'>{movie.Year}</p>
        </div>
      ))}
     </div>
   </div> */}
    </>
  );
}

export default HomePage;
