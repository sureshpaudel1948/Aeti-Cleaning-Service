// src/pages/Services.js
import React, { useState } from 'react'; // useState for handling showDetails state
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Services.css'; // Import the CSS file

const services = [
  { id: 1, name: 'Residential Cleaning', price: '$43 per hour', details: [
    { description: 'Carpet Cleaning per room', price: '$45' },
    { description: 'Couch Cleaning per seat', price: '$35' },
    { description: 'Curtains (Small)', price: '$30' },
    { description: 'Rug Cleaning', price: '$45' },
    { description: 'Single Bed Mattress Cleaning', price: '$60' }
  ]},
  { id: 2, name: 'Commercial Cleaning', price: '$53 per hour', details: [
    { description: 'Carpet Cleaning per room', price: '$45' },
    { description: 'Couch Cleaning per seat', price: '$35' },
    { description: 'Curtains (Small)', price: '$30' },
    { description: 'Curtains (Window)', price: '$65' },
    { description: 'Curtains (Door)', price: '$90' }
  ]},
  { id: 3, name: 'Deep Cleaning', price: '$240 per hour', details: [
    { description: 'Grout Cleaning (up to 50 Sqm)', price: '$350' },
    { description: '2 Bathroom Cleaning (up to 20 Sqm)', price: '$165' },
    { description: 'Kitchen & Hallway Cleaning (up to 25 Sqm)', price: '$215' },
    { description: '2 Bathroom Mould & Grout Cleaning', price: '$230' }
  ]}
];

const Services = () => {
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  // Handlers for navigating to the corresponding quote forms
  const handleCommercialQuote = () => {
    navigate('/commercial-quote'); // Redirect to CommercialQuoteForm
  };

  const handleResidentialQuote = () => {
    navigate('/residential-quote'); // Redirect to ResidentialQuoteForm (Assume this form exists)
  };

  const handleDeepQuote = () => {
    navigate('/deep-quote'); // Redirect to DeepCleaningQuoteForm (Assume this form exists)
  };

  const [showDetails, setShowDetails] = useState(null);

  const toggleDetails = (id) => {
    setShowDetails(showDetails === id ? null : id);
  };

  return (
    <div className="services">
      <h1>Our Services</h1>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <h2>{service.name}</h2>
            <p>{service.price}</p>

             {/* View Pricing Details Button */}
           <button className="details-btn" onClick={() => toggleDetails(service.id)}>
              {showDetails === service.id ? 'Hide Pricing Details' : 'View Pricing Details'}
            </button>


            {/* Quote Button */}
            {service.name === 'Commercial Cleaning' && (
              <button className="quote-btn" onClick={handleCommercialQuote}>
                Generate Free Quote for Commercial Cleaning
              </button>
            )}

            {service.name === 'Residential Cleaning' && (
              <button className="quote-btn" onClick={handleResidentialQuote}>
                Generate Free Quote for Residential Cleaning
              </button>
            )}

            {service.name === 'Deep Cleaning' && (
              <button className="quote-btn" onClick={handleDeepQuote}>
                Generate Free Quote for Deep Cleaning
              </button>
            )}

            {showDetails === service.id && (
              <div className="pricing-details">
                <ul>
                  {service.details.map((item, index) => (
                    <li key={index}>
                      <p>{item.description}: {item.price}</p>
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