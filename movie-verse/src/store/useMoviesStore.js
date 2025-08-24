import { create } from "zustand";
import { fetchFromTMDB } from "../utils/api";

const useMovieStore = create((set) => ({
  movies: [],
  popular: [],
  trending: [],
  tvshows: [],
  loading: false,
  error: null,

  fetchMovies: async () => {
    set({ loading: true });
    try {
      const data = await fetchFromTMDB("/movie/now_playing");
      set({ movies: data.results, loading: false });
    } catch (error) {
      console.error("Failed to fetch movies", error);
      set({ loading: false, error });
    }
  },

  fetchPopularMovies: async () => {
    set({ loading: true });
    try {
      const data = await fetchFromTMDB("/movie/popular");
      set({ popular: data.results, loading: false });
    } catch (error) {
      console.error("Failed to fetch popular movies", error);
      set({ loading: false, error });
    }
  },

  fetchTrendingMovies: async () => {
    set({ loading: true });
    try {
      const data = await fetchFromTMDB("/trending/movie/day");
      set({ trending: data.results, loading: false });
    } catch (error) {
      console.error("Failed to fetch trending movies", error);
      set({ loading: false, error });
    }
  },

  fetchTVShows: async () => {
    set({ loading: true });
    try {
      const data = await fetchFromTMDB("/tv/popular");
      set({ tvshows: data.results, loading: false });
    } catch (error) {
      console.error("Failed to fetch TV shows ", error);
      set({ loading: false, error });
    }
  },
}));

export default useMovieStore;
