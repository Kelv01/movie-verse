import React from "react";

// function SearchResults() {
//   return <div>SearchPage</div>;
// }

// export default SearchResults;


function SearchResults({ results }) {
  if (!results || results.length === 0) return null; // nothing to show

  return (
    <div className="absolute top-12 left-0 bg-black text-white p-4 rounded-md w-80 max-h-96 overflow-y-auto shadow-lg">
      {results.map((movie) => (
        <p key={movie.id} className="py-1 border-b border-gray-700">
          {movie.title}
        </p>
      ))}
    </div>
  );
}

export default SearchResults;
