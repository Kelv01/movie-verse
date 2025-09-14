import React, { useEffect, useState } from "react";
import { fetchFromTMDB } from "../utils/api";
import Loader from "../components/Loader";
import { IMG_BASE_URL } from "../utils/constants";
import Button from "../components/Button";
import { IoCloseOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

function MovieDetails({ movieId, onClose }) {
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [cast, setCast] = useState([]);
  const [producers, setProducers] = useState([]);
  const [director, setDirector] = useState(null);

  useEffect(() => {
    async function loadMovie() {
      const data = await fetchFromTMDB(
        `/movie/${movieId}?append_to_response=videos,credits`
      );

      setMovie(data);
      // Trailer
      const trailer = data.videos?.results?.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );
      if (trailer) setTrailerKey(trailer.key);

      //top 5 casts
      setCast(data.credits?.cast?.slice(0, 5) || []);

      //crew
      const producersList =
        data.credits?.crew?.filter((c) => c.job === "Producer") || [];
      setProducers(producersList);

      const directorObj = data.credits?.crew.find((c) => c.job === "Director");
      setDirector(directorObj || null);
    }
    if (movieId) loadMovie();
  }, [movieId]);
  if (!movie)
    return (
      <p>
        <Loader />
      </p>
    );

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div
        className="bg-yinminblue rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 relative p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-3xl hover:text-xanthous"
        >
          <IoCloseOutline />
        </button>

        <div className="flex flex-col md:flex-row">
          <img
            src={`${IMG_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="w-full md:w-1/3 h-80 object-cover rounded-l-lg"
          />
          <div className="p-4 flex-1">
            <h2 className="text-2xl font-bold text-xanthous">{movie.title}</h2>
            <p className="text-sm text-white mb-2">
              {movie.release_date} . {movie.runtime} mins
            </p>
            <p className="text-white text-sm mb-4">{movie.overview}</p>
            <p className="flex items-center gap-1 text-sm  text-xanthous mb-4">
              {" "}
              <IoIosStar />
              {movie.vote_average.toFixed(1)}
            </p>

            {/* cast */}
            {cast.length > 0 && (
              <p className="text-sm text-gray-300 mb-2">
                <span className="font-semibold text-white">Producers:</span>
                {producers.map((p) => p.name).join(", ")}
              </p>
            )}

            {/* Director */}
            {director && (
              <p className="text-sm text-gray-300 mb-4">
                <span className="font-semibold text-white">Director:</span>
                {director.name}
              </p>
            )}

            {/* Trailer */}
            {trailerKey && (
              <Button
                bg="bg-xanthous"
                hovbg="bg-xanthouse/80"
                onClick={() =>
                  window.open(
                    `https://www.youtube.com/watch?v=${trailerKey}`,
                    "_blank"
                  )
                }
              >
                <FaPlay /> Watch Trailer
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
