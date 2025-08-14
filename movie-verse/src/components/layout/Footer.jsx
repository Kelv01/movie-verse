import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const navLinks = [
    { name: "Now-playing", href: "Now Playing" },
    { name: "Upcoming Movies", href: "Upcoming Movies" },
    { name: "Genres", href: "Genres" },
    { name: "Reviews", href: "Reviews" },
  ];

  const GenresLinks = [
    { name: "Action", href: "Action" },
    { name: "Comedy", href: "Comedy" },
    { name: "Drama", href: "Drama" },
    { name: "Horror", href: "Horror" },
  ];

  return (
    <>
      <footer className="w-full bg-black absolute inset-x-0 bottom-0 h-16">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-white">
            <h1 className="text-white">
              <Link to="/">
                <span className="text-xanthous">Movie</span>Verse
              </Link>
            </h1>
            <div>
              <h2>Movies</h2>
              <ul className=" gap-8 text-white hover:text-xanthous">
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2>Genres</h2>
              <ul className=" gap-8 text-white hover:text-xanthous">
                {GenresLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
