import React, { useEffect } from "react";
import Loader from "../components/Loader";
import useMovieStore from "../store/useMoviesStore";
import useSearchStore from "../store/useSearchStore";
import MovieRow from "../components/MovieRow";
import HeroSection from "../components/HeroSection";
import MovieDetails from "./MovieDetails";

function HomePage() {
  const {
    popular,
    trending,
    tvshows,
    loading,
    error,
    fetchPopularMovies,
    fetchTrendingMovies,
    fetchTVShows,
    selectedMovieId,
    setSelectedMovieId,
    clearSelectedMovie,
  } = useMovieStore();

  const { results, searchTerm, loading: searchLoading } = useSearchStore();

  useEffect(() => {
    if (!searchTerm) {
      fetchPopularMovies();
      fetchTrendingMovies();
      fetchTVShows();
    }
  }, [searchTerm, fetchPopularMovies, fetchTrendingMovies, fetchTVShows]);

  return (
    <div>
      <HeroSection />

      {searchTerm ? (
        <div className="p-6 text-white">
          {searchLoading ? (
            <Loader />
          ) : results.length > 0 ? (
            <MovieRow
              title="Search Results"
              movies={results}
              onSelectMovie={setSelectedMovieId}
            />
          ) : (
            <p className="text-white font-mozzila">No results found</p>
          )}
        </div>
      ) : (
        <>
          {loading.popular ? (
            <Loader />
          ) : error.popular ? (
            <p className="text-white p-6">{error.popular}</p>
          ) : (
            <MovieRow
              title="Popular Movies"
              movies={popular}
              onSelectMovie={setSelectedMovieId}
            />
          )}

          {loading.trending ? (
            <Loader />
          ) : error.trending ? (
            <p className="text-white p-6">{error.trending}</p>
          ) : (
            <MovieRow
              title="Trending"
              movies={trending}
              onSelectMovie={setSelectedMovieId}
            />
          )}

          {loading.tvshows ? (
            <Loader />
          ) : error.tvshows ? (
            <p className="text-white p-6">{error.tvshows}</p>
          ) : (
            <MovieRow
              title="TV Shows"
              movies={tvshows}
              onSelectMovie={setSelectedMovieId}
            />
          )}
        </>
      )}
      {selectedMovieId && (
        <MovieDetails movieId={selectedMovieId} onClose={clearSelectedMovie} />
      )}
    </div>
  );
}
export default HomePage;
