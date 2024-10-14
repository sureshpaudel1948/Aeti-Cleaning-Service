import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png'; // Import the logo
import { FaBars, FaTimes } from 'react-icons/fa'; // Import burger and close icons from react-icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <a href="/" className="logo">
        <img src={logo} alt="Aeti Cleaning Service Logo" className='logo' />
      </a>
      
      {/* Burger Icon */}
      <div className="burger-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between burger and close icons */}
      </div>

      <nav className={isMenuOpen ? "nav-open" : ""}>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
