import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const navLinks = [
    { name: "Now playing", href: "Now Playing" },
    { name: "Upcoming Movies", href: "Upcoming Movies" },
    { name: "Genres", href: "Genres" },
    { name: "Reviews", href: "Reviews" },
  ];

  const MovieGenres = [
    { name: "Action", href: "Action" },
    { name: "Comedy", href: "Comedy" },
    { name: "Drama", href: "Drama" },
    { name: "Horror", href: "Horror" },
  ];
  const currentYear = new Date().getFullYear();
  

  return (
    <>
      <footer className="h-auto w-full bg-black md:flex-col sm:flex-col ">
        <div className="py-4 p-4 gap-4 md:flex-col sm:flex-col">
          <div className="text-white grid grid-cols-1 p-2 md:grid-cols-3 gap-8 justify-evenly ">
            <div className="md:flex-col">
              <h1 className="text-white">
                <Link to="/">
                  <span className="text-xanthous">Movie</span>Verse
                </Link>
              </h1>
              <p className="pt-4 text-left">
                Discover the latest blockbusters, <br />
                timeless classics,{" "}
                <span className="text-xanthous">
                  and hidden gems. <br />
                  Your ultimate destination for movie lovers.
                </span>
              </p>
            </div>

            <div className="ml-12.5 pl-12.5">
              <h2>Movies</h2>
              <ul className=" gap-8 text-white cursor-pointer pt-4">
                {navLinks.map((link, idx) => (
                  <li key={idx} className="hover:text-xanthous">
                    <Link to={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ml-25 pl-25">
              <h2>Genres</h2>
              <ul className=" gap-8 text-white pt-4">
                {MovieGenres.map((link, idx) => (
                  <li key={idx} className="hover:text-xanthous">
                    <Link to={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="border-raisingblack w-full my-4" />
          <div className="text-white flex items-center justify-between gap4 p-4 flex-wrap">
            <p>
              &copy; {currentYear} <span className="text-xanthous">Movie</span>
              Verse
            </p>
            <div className="flex gap-4 cursor-pointer">
              <p>Terms</p>
              <p>Privacy</p>
              <p>Cookies</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
