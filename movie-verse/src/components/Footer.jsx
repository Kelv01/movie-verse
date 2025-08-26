import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const navLinks = [
    { name: "Popular", href: "/popular" },
    { name: "Upcoming", href: "/upcoming" },
    { name: "Genres", href: "/genres" }
   
  ];

  const MovieGenres = [
    { name: "Action", href: "/action" },
    { name: "Comedy", href: "/comedy" },
    { name: "Drama", href: "/drama" },
    { name: "Horror", href: "/horror" },
  ];
  const currentYear = new Date().getFullYear();
  

  return (
    <>
      <footer className="w-full bg-black px-6 md:px-20 py-10  ">
        <div className="max-w-6xl mx-auto py-8 px-6">
          <div className="text-white grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left md:gap-20 lg:place-items-center-safe">
            <div>
              <h1 className="text-white text-2xl font-bold font-serif">
                <Link to="/">
                  <span className="text-xanthous">Movie</span>Verse
                </Link>
              </h1>
              <p className="pt-4 text-sm leading-relaxed font-mozzila text-center md:text-left ">
                Discover the latest blockbusters, <br />
                timeless classics,{" "}
                <span className="text-xanthous">
                  and hidden gems. <br />
                  Your ultimate destination for movie lovers.
                </span>
              </p>
            </div>

            <div className="font-serif">
              <h2 className="text-lg font-bold">Movies</h2>
              <ul className=" space-y-2 text-white cursor-pointer pt-4">
                {navLinks.map((link, idx) => (
                  <li key={idx} className="hover:text-xanthous">
                    <Link to={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="font-serif">
              <h2 className="text-lg font-bold">Genres</h2>
              <ul className=" space-y-2 text-white pt-4">
                {MovieGenres.map((link, idx) => (
                  <li key={idx} className="hover:text-xanthous">
                    <Link to={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="border-raisingblack  my-6" />
          <div className="text-white font-serif flex flex-col md:flex-row items-center justify-between gap-4">
            <p>
              &copy; {currentYear} <span className="text-xanthous">Movie</span>
              Verse
            </p>
            <div className="flex gap-6 text-sm  cursor-pointer">
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
