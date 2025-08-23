import React from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useSearchStore from "../store/useSearchStore";

function SearchBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [input, setInput] = useState("");

  const { fetchSearchResults, clearResults } = useSearchStore();

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      clearResults([]);
    } else {
      fetchSearchResults(input);
    }
  };

  return (
    <>
      {/* Search button and field start */}
      <div className="relative flex items-center">
        {showSearch && (
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-white rounded-2xl p-1 border-2 border-xanthous "
            />
          </form>
        )}
        <button onClick={handleSearchToggle} className="ml-2">
          <CiSearch className="text-xanthous text-2xl  cursor-pointer" />
        </button>
      </div>
      {/* Search button and field end */}
    </>
  );
}

export default SearchBar;
