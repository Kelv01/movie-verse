import React from "react";
import { IoStar } from "react-icons/io5";

function MovieCard({ movie }) {
  const title = movie.title || movie.name;
  const releaseDate = movie.release_date || movie.first_air_date;

  const year = releaseDate ? new Date(releaseDate).getFullYear() : "N/A";

  return (
    <div className="bg-yinminblue h-full rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200   hover:border hover:border-xanthous">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={title}
        className="rounded-t-lg w-full h-80 object-cover"
      />

      <div>
        <h2 className="text-lg font-semibold p-2 font-serif">{title}</h2>
        <p className="flex items-center gap-1 text-sm text-xanthous p-2">
          <IoStar />  {movie.vote_average.toFixed(1)}{" "}
        </p>
        <p className="text-sm text-white p-2">{year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
