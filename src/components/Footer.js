// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">

          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">Aeti Cleaning Services</span>
            </a>
            <div className="footer-contact pt-3">
              <p><strong>Phone:</strong> <span>+61234567890</span></p>
              <p><strong>Email:</strong> <span>aeticleaningservices@gmail.com</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="https://www.facebook.com/profile.php?id=61566451723826&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="/services#residential">Residential Cleaning</a></li>
              <li><a href="/services#commercial">Commercial Cleaning</a></li>
              <li><a href="/services#deep">Deep Cleaning</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-3 footer-links">
            <h4>Contact Us</h4>
            <p className='footer-cont'><strong>Address:</strong> <span>113 Renou St, East Cannington, Perth-WA, Australia</span></p>
            <p className='footer-cont'><strong>Email:</strong> <span>aeticleaningservices@gmail.com</span></p>
            <p className='footer-cont'><strong>Phone:</strong> <span>+61234567890</span></p>
          </div>

        </div>
      </div>

      <div className="copyright">
        <p className='copy'>©<span> Copyright 2024</span> <strong className="px-1 sitename">Aeti Cleaning Servicess</strong> <span>All Rights Reserved</span></p>
      </div>
    </footer>
  );
};

export default Footer;
