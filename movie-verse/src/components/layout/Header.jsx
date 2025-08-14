import React from "react";
import {Link} from "react-router-dom"


function Header() {
  const navLinks = [
    { name: "Now-playing", href: "Now Playing" },
    { name: "Upcoming Movies", href: "Upcoming Movies" },
    { name: "Genres", href: "Genres" },
    { name: "Reviews", href: "Reviews" },
  ];

  return (
    <>
      <nav className="flex justify-between w-full py-0.5">
        <h1 className="text-white"> <Link to='/'>
        <span className="text-xanthous">Movie</span>Verse</Link>
          
        </h1>
        <ul className="flex gap-8 text-white">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <input type="search" name="search" id="search" placeholder="search" className="bg-white rounded-2xl p-1 "/>
      </nav>
    </>
  );
}

export default Header;
