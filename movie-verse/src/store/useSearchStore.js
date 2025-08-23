import React from "react";
import {create} from "zustand"
import { searchMovies } from "../utils/api";

const useSearchStore = create((set) => ({
  results: [],
  loading: false,
  error: null,
  searchTerm: "",

  fetchSearchResults: async (query) => {
    if (!query.trim()) {
      set({ results: [], searchTerm: "" });
      return;
    }
    set({ loading: true, error: null, searchTerm: query });
    try {
      const data = await searchMovies(query);
      set({ results: data?.results || [], loading: false });
    } catch (error) {
      console.error("Failed to fetcj search results", error);
      set({ loading: false });
    }
  },
  clearResults: () => set({ results: [], searchTerm: "" }),
}));

export default useSearchStore;
