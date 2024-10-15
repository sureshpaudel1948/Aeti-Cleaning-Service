// src/pages/Services.js
import React, { useState } from "react"; // useState for handling showDetails state
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Services.css"; // Import the CSS file

const services = [
  {
    id: 1,
    name: "Residential Cleaning",
    description:
      "Our Residential Cleaning service is designed to maintain the cleanliness and comfort of your home. We offer a comprehensive range of services tailored to meet the needs of your living space. Whether it's routine vacuuming, upholstery cleaning, or dusting, our trained professionals ensure your home stays fresh and hygienic. We pay special attention to high-traffic areas and hard-to-reach places to ensure your home remains a healthy environment for you and your family. With flexible scheduling and customized cleaning plans, we adapt to your unique preferences and lifestyle.",
    price: "$43 per hour",
    details: [
      { description: "Carpet Cleaning per room", price: "$45" },
      { description: "Couch Cleaning per seat", price: "$35" },
      { description: "Curtains (Small)", price: "$30" },
      { description: "Rug Cleaning", price: "$45" },
      { description: "Single Bed Mattress Cleaning", price: "$60" },
    ],
  },
  {
    id: 2,
    name: "Commercial Cleaning",
    description:
      "Commercial Cleaning services are tailored to keep your office or commercial space looking pristine and professional. A clean workspace is essential for productivity, employee well-being, and creating a positive impression on clients. We offer deep cleaning, surface sanitization, and specialized care for high-touch areas to maintain the highest standards of hygiene. Whether it's daily maintenance or periodic deep cleaning, our services are customized to fit your business needs, ensuring a spotless environment that promotes efficiency and professionalism in the workplace.",
    price: "$53 per hour",
    details: [
      { description: "Carpet Cleaning per room", price: "$45" },
      { description: "Couch Cleaning per seat", price: "$35" },
      { description: "Curtains (Small)", price: "$30" },
      { description: "Curtains (Window)", price: "$65" },
      { description: "Curtains (Door)", price: "$90" },
    ],
  },
  {
    id: 3,
    name: "Deep Cleaning",
    description:
      "For those tough-to-tackle cleaning tasks, our Deep Cleaning service goes beyond the surface. Ideal for spaces that require thorough and intensive cleaning, we target grime, stains, and built-up dirt in every corner. From grout cleaning in kitchens and bathrooms to mould removal and heavy-duty scrubbing, we leave no detail overlooked. Perfect for post-construction cleanups, end-of-lease cleaning, or spaces that haven't been cleaned in a while, our deep cleaning service rejuvenates your property and leaves it sparkling clean, ensuring every nook and cranny is thoroughly sanitized.",
    price: "$240 per hour",
    details: [
      { description: "Grout Cleaning (up to 50 Sqm)", price: "$350" },
      { description: "2 Bathroom Cleaning (up to 20 Sqm)", price: "$165" },
      {
        description: "Kitchen & Hallway Cleaning (up to 25 Sqm)",
        price: "$215",
      },
      { description: "2 Bathroom Mould & Grout Cleaning", price: "$230" },
    ],
  },
];

const Services = () => {
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  // Handlers for navigating to the corresponding quote forms
  const handleCommercialQuote = () => {
    navigate("/commercial-quote"); // Redirect to CommercialQuoteForm
  };

  const handleResidentialQuote = () => {
    navigate("/residential-quote"); // Redirect to ResidentialQuoteForm (Assume this form exists)
  };

  const handleDeepQuote = () => {
    navigate("/deep-quote"); // Redirect to DeepCleaningQuoteForm (Assume this form exists)
  };

  const [showDetails, setShowDetails] = useState(null);

  const toggleDetails = (id) => {
    setShowDetails(showDetails === id ? null : id);
  };

  return (
    <div className="services">
      <h1>Our Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h2>{service.name}</h2>
            {/* Brief description of the service */}
            <p className="description">{service.description}</p>
            <p>{service.price}</p>

            {/* View Pricing Details Button */}
            <button
              className="details-btn"
              onClick={() => toggleDetails(service.id)}
            >
              {showDetails === service.id
                ? "Hide Pricing Details"
                : "View Pricing Details"}
            </button>

            {/* Quote Button */}
            {service.name === "Commercial Cleaning" && (
              <button className="quote-btn" onClick={handleCommercialQuote}>
                Generate Free Quote for Commercial Cleaning
              </button>
            )}

            {service.name === "Residential Cleaning" && (
              <button className="quote-btn" onClick={handleResidentialQuote}>
                Generate Free Quote for Residential Cleaning
              </button>
            )}

            {service.name === "Deep Cleaning" && (
              <button className="quote-btn" onClick={handleDeepQuote}>
                Generate Free Quote for Deep Cleaning
              </button>
            )}

            {showDetails === service.id && (
              <div className="pricing-details">
                <ul>
                  {service.details.map((item, index) => (
                    <li key={index}>
                      <p>
                        {item.description}: {item.price}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
