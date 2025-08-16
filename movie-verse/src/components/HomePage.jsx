import React from "react";
import useSearchStore from "./utils/useSearchStore";

function HomePage() {
  const { movies, loading, error } = useSearchStore();

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-gray-500">{error}</p>;
  if (!movies || movies.length === 0) {
    return <p className="text-center text-gray-400">No movies found</p>;
  }

  return (
    <>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-white">Search Results</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-200 overflow-hidden"
            >
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={movie.Title}
                className="w-full h-72 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-lg truncate">
                  {movie.Title}
                </h3>
                <p className="text-sm text-gray-500">{movie.Year}</p>
              </div>
            </div>
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
