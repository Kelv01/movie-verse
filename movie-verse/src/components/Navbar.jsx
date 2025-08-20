import React, { useState } from 'react'
import {  Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

function Navbar() {
    const [showSearch, setShowSearch] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    const navLinks = [
        {name: "Home", href: "/"},
        {name: "Popular", href: "/popular"},
        {name: "Upcoming", href: "/upcoming"},
        {name: "Genres", href: "/genres"},
    ]

    const handleSearchToggle = () => {
        setShowSearch((prev) => !prev)
    }

    const updateSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }
  return (
    <>
      <nav className="sticky top-0 z-50 bg-raisingblack flex justify-between w-full py-6 p-8 ">
        <h1 className="text-white">
          
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
        <button onClick={handleSearchToggle} className='ml-2'>
          <CiSearch className="text-xanthous text-2xl  cursor-pointer"/>
        </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar