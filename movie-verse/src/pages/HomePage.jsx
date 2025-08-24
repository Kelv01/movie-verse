import React, { useEffect } from "react";
import Loader from "../components/Loader";
import useMovieStore from "../store/useMoviesStore";
import useSearchStore from "../store/useSearchStore";
import MovieRow from "../components/MovieRow";
import HeroSection from "../components/HeroSection";

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
  } = useMovieStore();

  const { results, searchTerm, loading: searchLoading } = useSearchStore();

  useEffect(() => {
    if (!searchTerm) {
      fetchPopularMovies();
      fetchTrendingMovies();
      fetchTVShows();
    }
  }, [searchTerm, fetchPopularMovies, fetchTrendingMovies, fetchTVShows]);

  if (loading || searchLoading) return <Loader />;
  if (error) return <p className="text-white p-6">{error}</p>;

  return (
    <div>
      <HeroSection />

      {searchTerm ? (
        <div className="p-6 text-white">
          {results.length > 0 ? (
            <MovieRow title="Search Results" movies={results} />
          ) : (
            <p className="text-white font-mozzila">No results found</p>
          )}
        </div>
      ) : (
        <>
          <MovieRow title="Popular Movies" movies={popular} />
          <MovieRow title="Trending" movies={trending} />
          <MovieRow title="TV Shows" movies={tvshows} />
        </>
      )}
    </div>
  );
}
export default HomePage;
