import React from "react";
import {create} from "zustand"
import { searchMovies } from "../utils/api";

const useSearchStore = create((set, get) => ({
  results: [],
  loading: false,
  error: null,
  searchTerm: "",
  cache: {},
  debounceTime: null,

  fetchSearchResults: async (query) => {
    if (!query.trim()) {
      set({ results: [], searchTerm: "" });
      return;
    }

    const {cache, debounceTime} = get();
    //use cached results if available
    if (cache[query]) {
      set({results: cache[query], searchTerm: query})
      return;
    }

    //clear prev debounce timer
    if(debounceTime) clearTimeout(debounceTime)

    //debounce the api call
    const newTimer = setTimeout(async () => {
      set({loading: true, error: null, searchTerm: query})

       try {
      const data = await searchMovies(query);
      const results = data?.results || [];

      //save to cache
      set((state) => ({
        results,
        loading: false,
        cache: {...state.cache, [query]: results},
      }))
    } catch (error) {
      console.error("Failed to fetcj search results", error);
      set({ loading: false, error });
    }
    }, 500) //wait 500ms after typing stops

    set({debounceTime: newTimer})

   
  },
  clearResults: () => set({ results: [], searchTerm: "" }),
}));

export default useSearchStore;