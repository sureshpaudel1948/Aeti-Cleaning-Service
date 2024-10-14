import React from "react";
import "./About.css";
import { useNavigate } from 'react-router-dom';



const About = () => {
    const navigate = useNavigate();
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          At Aeti Cleaning Service, we are committed to providing high-quality,
          reliable cleaning solutions to homes and businesses across Perth,
          Western Australia. Whether it's residential, commercial, or deep
          cleaning, we tailor our services to meet your specific needs, ensuring
          a spotless and hygienic environment.
        </p>

        <div className="about-features">
          <div className="feature-card">
            <h3 className="feature-title">Our Expertise</h3>
            <p className="feature-description">
              With years of experience in the cleaning industry, we specialize
              in carpet, upholstery, and deep cleaning. We use eco-friendly
              products and the latest technology to ensure a thorough cleaning
              every time.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Customer-Centric Approach</h3>
            <p className="feature-description">
              Our clients are our top priority. We believe in building long-term
              relationships through excellent service, transparent pricing, and
              consistent results. Your satisfaction is our success!
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Professional and Trusted</h3>
            <p className="feature-description">
              Our professional cleaners are fully trained and insured. We take
              pride in being a trusted service provider, and we guarantee
              high-quality standards in every task we undertake.
            </p>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready for a spotless clean?</h2>
          <p>
            Get in touch with Aeti Cleaning Service today for a free quote and
            let us take care of your cleaning needs.
          </p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default About;
