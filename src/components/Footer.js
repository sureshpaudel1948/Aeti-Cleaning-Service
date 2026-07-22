import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">Aeti Cleaning Services</Link>
          <p>Dependable cleaning, fabric care and laundry support for busy homes and thriving workplaces.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61566451723826&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">f</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">i</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">t</a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h4>Contact</h4>
          <p><strong>Address:</strong> 113 Renou St, East Cannington, Perth-WA, Australia</p>
          <p><strong>Email:</strong> aeticleaningservices@gmail.com</p>
          <p><strong>Phone:</strong> +61 234 567 890</p>
        </div>
      </div>

      <div className="copyright">
        <p>© 2026 Aeti Cleaning Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
