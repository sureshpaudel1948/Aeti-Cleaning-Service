import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Aeti Cleaning Services logo" className="logo" />
        <div>
          <span className="brand-name">Aeti Cleaning Services</span>
          <span className="brand-tag">Fresh spaces, simpler routines</span>
        </div>
      </Link>

      <div className="burger-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={isMenuOpen ? 'nav-open' : ''}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
