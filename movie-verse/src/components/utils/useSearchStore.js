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
  fetchMovies: async (term, returnOnly = false) => {
    if (!term) {
      if (!returnOnly) {
        set({ movies: [], error: null });
      }
      return [];
    }
    if (!returnOnly) {
      set({ loading: true, error: null });
    }

    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${term}`
      );

      if (res.data.Response === "True") {
        const results = res.data.Search || [];
        // set({ movies: res.data.Search || [] });

        if (returnOnly) {
          return results;
        } else {
          set({ movies: results, loading: false });
        }
      } else {
        if (returnOnly) {
          return [];
        } else {
          set({
            movies: [],
            error: res.data.Error || "No results found",
            loading: false,
          });
        }
      }
    } catch (error) {
      console.error("error fetching movies:", error);

      if (returnOnly) {
        return [];
      } else {
        set({ error: "Error fetching movies", loading: false });
      }
    }
  },
}));

export default useSearchStore;
