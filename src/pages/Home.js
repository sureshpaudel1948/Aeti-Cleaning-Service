import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";
import BookingForm from "../components/BookingForm.js";

const serviceHighlights = [
  {
    title: "Carpet & Rug Care",
    description:
      "Refresh fibres, remove stains, and bring softness back to your favourite rooms.",
    icon: "🧶",
  },
  {
    title: "Upholstery & Mattresses",
    description:
      "Give sofas, cushions, and mattresses a deep clean with fabric-safe care.",
    icon: "🛋️",
  },
  {
    title: "Curtains, Blinds & Windows",
    description:
      "Brighten interiors with polished window treatments and spotless glass.",
    icon: "🪟",
  },
];

const whyChooseUs = [
  {
    title: "Reliable scheduling",
    description: "Choose a time that suits your routine and enjoy punctual service.",
  },
  {
    title: "Eco-conscious methods",
    description: "We use professional products that lift dirt while being mindful of your spaces.",
  },
  {
    title: "Friendly local team",
    description: "Expect warm service, clear communication, and care from start to finish.",
  },
];

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();
  const bookingSectionRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToBooking) {
      setShowForm(true);
      const timer = window.setTimeout(() => {
        bookingSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 120);

      return () => window.clearTimeout(timer);
    }
  }, [location.state]);

  const handleBookService = () => {
    setShowForm(true);
    window.setTimeout(() => {
      bookingSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);
  };

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Premium cleaning, polished for modern living</p>
          <h1>Spotless spaces with a fresh, local touch.</h1>
          <p className="hero-text">
            Aeti Cleaning Services brings expert fabric care, residential cleaning,
            and convenient laundry support to homes and businesses in Perth. We make
            every visit feel effortless and every finish look exceptional.
          </p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={handleBookService}>
              Book a Service
            </button>
            <a className="secondary-btn" href="/services">
              Explore Services
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>24/7</strong>
              <span>Booking support</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Client-focused care</span>
            </div>
            <div>
              <strong>+10$</strong>
              <span>Delivery fee for laundry</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <img src={require("../assets/cleaning.jpg")} alt="Professional cleaning team" />
          <div className="hero-card-body">
            <p className="eyebrow">Laundry & Delivery</p>
            <h3>Washing, drying, ironing and folding — we make the routine easier.</h3>
            <p>
              Add delivery to your laundry order for a simple, stress-free finish.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">What we do best</p>
          <h2>Fresh results for every room, fabric and surface.</h2>
        </div>
        <div className="highlights-grid">
          {serviceHighlights.map((item) => (
            <article className="highlight-card" key={item.title}>
              <div className="highlight-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section accent-section">
        <div className="section-heading">
          <p className="eyebrow">Laundry & Delivery</p>
          <h2>Flexible laundry care with pickup and delivery options.</h2>
        </div>
        <div className="laundry-panel">
          <div>
            <p className="laundry-intro">
              We go to absolute extremes to save your time by handling your entire laundry cycle,
              from doorstep collection and meticulous washing to fiber-restoring ironing, crisp folding,
              and hand-delivery. Let us obsess over the chores so you can reclaim your day and focus
              entirely on what matters most.
            </p>
            <div className="laundry-services">
              <h4>Services Include</h4>
              <ul>
                <li>Collection</li>
                <li>Washing</li>
                <li>Ironing and Folding</li>
                <li>Delivery at Door</li>
              </ul>
            </div>
          </div>
          <div className="laundry-card">
            <img src={require("../assets/laundary&delivery.jpg")} alt="Laundry and Delivery service" />
            <h3>Delivery fee</h3>
            <p>Enjoy a smooth delivery experience for just <strong>$10</strong> extra.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Why clients choose us</p>
          <h2>Reliable service, polished results and a calmer routine.</h2>
        </div>
        <div className="benefits-grid">
          {whyChooseUs.map((item) => (
            <article className="benefit-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section booking-section" id="book-now" ref={bookingSectionRef}>
        <div className="section-heading">
          <p className="eyebrow">Get a quote</p>
          <h2>Tell us what you need and we will prepare a tailored estimate.</h2>
        </div>
        {showForm ? <BookingForm /> : <p className="booking-intro">Launch the quote form to get started with your custom cleaning plan.</p>}
      </section>
    </div>
  );
};

export default Home;
