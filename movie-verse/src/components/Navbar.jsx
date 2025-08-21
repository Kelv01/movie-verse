import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Popular", href: "/popular" },
    { name: "Upcoming", href: "/upcoming" },
    { name: "Genres", href: "/genres" },
  ];

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
  };

  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <nav className="font-serif sticky top-0 z-50 bg-raisingblack flex justify-between items-center w-full py-6 px-8 ">
        <h1 className="text-white">
          <Link to="/">
            <span className="text-xanthous">Movie</span>Verse
          </Link>
        </h1>

        <ul className="hidden md:flex gap-8 text-white">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Search button and field start */}
        <div className="relative flex items-center">
          {showSearch && (
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search"
              value={searchTerm}
              onChange={updateSearchTerm}
              className="bg-white rounded-2xl p-1 border-2 border-xanthous "
            />
          )}
          <button onClick={handleSearchToggle} className="ml-2">
            <CiSearch className="text-xanthous text-2xl  cursor-pointer" />
          </button>
        </div>
        {/* Search button and field end */}

        {/* Hamburger icon for mobile */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="ml-4 text-xanthous text-3xl md:hidden"
        >
          <AiOutlineMenuUnfold />{" "}
        </button>
      </nav>
      {/* side bar mobile responsive for navlinks strat  */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-raisingblack text-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700 font-serif">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <MdOutlineClose />
          </button>
        </div>
        {/* */}
        <ul className="flex flex-col gap-6 p-6 text-white font-serif">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* side bar mobile responsive for navlinks end */}
    </>
  );
}

export default Navbar;
