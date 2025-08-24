import React from "react";

function SearchResults({ results }) {
  if (!results || results.length === 0) return null;

  return (
    <div className="absolute top-12 left-0 bg-black text-white rouned-md w-80 max-h-96 overflow-y-auto shadow-lg">
      {results.map((movie) => (
        <p key={movie.id} className="py-1 border-b border-gray-700">
          {movie.title || movie.name}
        </p>
      ))}
    </div>
  );
}

export default SearchResults;
