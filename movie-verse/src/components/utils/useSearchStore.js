import { create } from "zustand";
import axios from "axios";

import React from "react";

const apiKey = import.meta.env.VITE_API_KEY;

const useSearchStore = create((set) => ({
  searchTerm: "",
  movies: [],
  loading: false,
  error: null,

  setSearchTerm: (term) => set({ searchTerm: term }),
  fetchMovies: async (term) => {
    if (!term) {
      set({ movies: [], error: null });
      return;
    }
    set({ loading: true, error: null });

    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${term}`
      );
      if (res.data.Response === "True") {
        set({ movies: res.data.Search || [], loading: false });
      } else {
        set({ movies: [], error: res.data.Error || "No results found", loading: false });
      }
    } catch (error) {
      console.error("error fetching movies:", error);
    }
  },
}));

export default useSearchStore;
