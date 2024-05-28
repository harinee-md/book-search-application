import React from 'react'
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>
          Lexicon : Your Ultimate Literary Companion
          </h2><br/>
          <p className='header-text fs-18 fw-3'>
          BookFinder is a smart and user-friendly app designed for book enthusiasts. Whether you're seeking the latest bestsellers, hidden gems, or specific titles, BookFinder makes discovering and tracking books effortless. Explore recommendations, read reviews, and locate your next favorite read with ease.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header;