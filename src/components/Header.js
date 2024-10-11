// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';  // Import the logo

const Header = () => {
  return (
    <header>
       <a href="/" class="logo">
      <img src={logo} alt="Aeti Cleaning Service Logo" className='logo' /> 
      </a>
      <nav>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;