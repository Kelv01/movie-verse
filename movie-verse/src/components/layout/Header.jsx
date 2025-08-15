import React from "react";
import { Link } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import useSearchStore from "../utils/useSearchStore";

function Header() {
  const navLinks = [
    { name: "Now-playing", href: "Now Playing" },
    { name: "Upcoming Movies", href: "Upcoming Movies" },
    { name: "Genres", href: "Genres" },
    { name: "Reviews", href: "Reviews" },
  ];

  const { searchTerm, setSearchTerm, fetchMovies, loading } = useSearchStore();

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      fetchMovies(searchTerm);
    }
  };
  return (
    <>
      <nav className="flex justify-between w-full py-6 p-8 ">
        <h1 className="text-white">
          {" "}
          <Link to="/">
            <span className="text-xanthous">Movie</span>Verse
          </Link>
        </h1>
        <ul className="flex gap-8 text-white">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="relative">
          <input
          type="search"
          name="search"
          id="search"
          placeholder="search"
          value={searchTerm}
          onChange={handleInput}
          className="bg-white rounded-2xl p-1 border-2 border-xanthous "
        />
        <button onClick={handleSearch} disabled={loading}>
          <CiSearch className="text-gray-500 text-2xl absolute right-3 bottom-4 -transform translate-y-1/2 cursor-pointer"/>
        </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
