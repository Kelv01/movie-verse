import { create } from "zustand";
import { fetchFromTMDB } from "../utils/api";

import React from "react";

const useMoviesStore = create((set) => ({
  movies: [],
  popular: [],
  trending: [],
  tvshows: [],
  loading: false,
  error: null,

  fetchPopularMovies: async () => {
    set({ loading: true });
    try {
      const data = await fetchFromTMDB("/movie/popular");
      set({ movies: data.results, loading: false });
    } catch (error) {
      console.error("Failed to fetch movies", error)
      set({loading: false });
    }
  },

  fetchTrendingMovies: async () => {
    set({ loading: true });
    try {
      const data = await fetchFromTMDB("/trending/movie/day");
      set({ movies: data.results, loading: false });
    } catch (error) {
      console.error("Failed to  fetch trending movies", error)
      set({loading: false });
    }
  },

  fetchTVShows : async () => {
    set({loading: true})

    try {
      const data = await fetchFromTMDB("/tv/popular")
      set({tvshows: data.results, loading : false})
    } catch (error) {
      console.error("Failed to Fetch Tv shows", error )
      set({loading : false})
    }
  }
}));

export default useMoviesStore;
