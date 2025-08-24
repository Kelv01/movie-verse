import React, { useState,useEffect } from "react";
import { fetchFromTMDB } from "../utils/api";
import { FaPlay } from "react-icons/fa";
import Loader from "./Loader";
import Button from "./Button";

function HeroSection() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await fetchFromTMDB("/trending/movie/day");

        if (data?.results.length) {
          const randomMovie =
            data.results[Math.floor(Math.random() * data.results.length)];
          setMovie(randomMovie);
        }
      } catch (error) {
        console.error("Error fetching movie", error);
      }
    };
    fetchMovie();
  }, []);

  if (!movie) {
    return (
      <section>
        <Loader />
      </section>
    );
  }
  const backgroundImage = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "/batman_superman.jpg";
  return (
    <section className="relative h-screen bg-black text-white">
      <div className="absolute inset-0 bg-cover  bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
  
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

      <div className="relative z-10 px-6 py-32 md:px-20 h-full flex flex-col justify-center max-w-3xl">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight font-serif">{movie.title || movie.name}</h1>
        <p className="mt-4 text-white text-lg md:text-xl line-clamp-3 font-mozzila">{movie.overview}</p>
        <div className="mt-6 flex gap-4">
      <Button> 
        <FaPlay /> Play Trailer
        </Button> 
        <Button bg="border border-xanthous  hover:bg-xanthous/80 flex items-center gap-2  text-white px-6 py-3 rounded font-semibold shadow-lg">
        Details

        </Button>
        
      </div>
      </div>
      
    </section>
  )
}

export default HeroSection;
