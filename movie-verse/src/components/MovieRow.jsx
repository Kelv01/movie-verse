import React from 'react'
import MovieCard from './MovieCard'

function MovieRow({title, movies}) {
    if (!movies || movies.length === 0) {
        return null;
    }
  return (
    <div className='p-6 text-white'>
        <h2 className='text-2xl font-bold mb-4 font-serif'>{title}</h2>
        <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {movies.map((movie) => (
                <li key={movie.id} className='bg-yinminblue shadow-lg shadow-glaucous/20 rounded font-roboto'> <MovieCard movie={movie} />

                </li>
            ))}

        </ul>
    </div>
  )
}

export default MovieRow