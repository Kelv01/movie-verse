import React from 'react'
import useSearchStore from './utils/useSearchStore'

function HomePage() {

  const {movies} = useSearchStore();
  return (
    <>
    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID}>{movie.Title}</li>
      ))}
    </ul>
     </>
  )
}

export default HomePage