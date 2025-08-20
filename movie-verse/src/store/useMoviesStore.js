import { create } from "zustand";
import { fetchFromTMDB } from "../utils/api";

import React from "react";

const useMoviesStore = create((set) => ({
  movies: [],
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
}));

export default useMoviesStore;
