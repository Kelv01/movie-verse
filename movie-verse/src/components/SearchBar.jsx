import React from "react";
import { useEffect } from "react";
import useSearchStore from "./utils/useSearchStore";

function SearchBar() {
  const { searchTerm, setSearchTerm, fetchMovies } = useSearchStore();

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm, fetchMovies]);

  return (
    <>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-white rounded-2xl p-1 "
      />
    </>
  );
}

export default SearchBar;
