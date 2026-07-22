import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <p className="eyebrow">About us</p>
        <h1 className="about-title">A modern cleaning partner for busy homes and businesses.</h1>
        <p className="about-description">
          Aeti Cleaning Services is proud to offer polished cleaning, upholstery care,
          curtain and window treatments, and convenient laundry support. We combine
          professionalism with a warm, local approach so every visit feels smooth,
          practical and refreshingly reliable.
        </p>

        <div className="about-features">
          <div className="feature-card">
            <h3 className="feature-title">Our expertise</h3>
            <p className="feature-description">
              We specialise in carpet care, rug cleaning, upholstery, mattresses, curtains,
              blinds, windows and laundry services, all designed around the needs of your space.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Client-first approach</h3>
            <p className="feature-description">
              Transparent pricing, clear communication and a service mindset help us build
              long-lasting relationships with every client we support.
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Trusted service</h3>
            <p className="feature-description">
              Our team is committed to high standards, thoughtful care and dependable results,
              whether you need a one-off refresh or a regular routine.
            </p>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready for a spotless clean?</h2>
          <p>Book a consultation and let us shape a plan around your home, schedule and budget.</p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default About;
