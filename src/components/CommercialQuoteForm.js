// src/components/CommercialQuoteForm.js
import React, { useState } from 'react';
import './CommercialQuoteForm.css'; // Optional: Create CSS for styling the form
import emailjs from 'emailjs-com'; // Import EmailJS

const CommercialQuoteForm = () => {
  // State to hold input values and total price
  const [carpets, setCarpets] = useState(0);
  const [couches, setCouches] = useState(0);
  const [smallCurtains, setSmallCurtains] = useState(0);
  const [windowCurtains, setWindowCurtains] = useState(0);
  const [doorCurtains, setDoorCurtains] = useState(0);
  const [total, setTotal] = useState(0);

  // Prices for each service
  const prices = {
    carpet: 45,
    couch: 35,
    smallCurtain: 30,
    windowCurtain: 65,
    doorCurtain: 90
  };

  // Calculate the total cost when user inputs values
  const calculateTotal = () => {
    const totalPrice = 
      (carpets * prices.carpet) +
      (couches * prices.couch) +
      (smallCurtains * prices.smallCurtain) +
      (windowCurtains * prices.windowCurtain) +
      (doorCurtains * prices.doorCurtain);

    setTotal(totalPrice);

    sendEmail(totalPrice); // Send email after calculation
  };

  // EmailJS function to send the quote details
  const sendEmail = (totalPrice) => {
    const templateParams = {
      carpets,
      couches,
      smallCurtains,
      windowCurtains,
      doorCurtains,
      totalPrice
    };

    emailjs.send(
      'service_72gbgi8', // Replace with your EmailJS service ID
      'template_84p0hcy', // Replace with your EmailJS template ID
      templateParams,
      'UmVoIH6pHds8c_SaI' // Replace with your EmailJS user ID
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Quote generated and sent via email!');
      },
      (err) => {
        console.log('FAILED...', err);
      }
    );
  };

  return (
    <div className="quote-form">
      <h2>Generate Free Quote - Commercial Cleaning</h2>

      <div className="form-group">
        <label htmlFor="carpets">How many carpets would you like to clean?</label>
        <input 
          type="number" 
          id="carpets" 
          value={carpets} 
          onChange={(e) => setCarpets(Number(e.target.value))}
          placeholder="Enter number of carpets"
        />
      </div>

      <div className="form-group">
        <label htmlFor="couches">How many couch seats would you like to clean?</label>
        <input 
          type="number" 
          id="couches" 
          value={couches} 
          onChange={(e) => setCouches(Number(e.target.value))} 
          placeholder="Enter number of couch seats"
        />
      </div>

      <div className="form-group">
        <label htmlFor="smallCurtains">How many small curtains would you like to clean?</label>
        <input 
          type="number" 
          id="smallCurtains" 
          value={smallCurtains} 
          onChange={(e) => setSmallCurtains(Number(e.target.value))} 
          placeholder="Enter number of small curtains"
        />
      </div>

      <div className="form-group">
        <label htmlFor="windowCurtains">How many window curtains would you like to clean?</label>
        <input 
          type="number" 
          id="windowCurtains" 
          value={windowCurtains} 
          onChange={(e) => setWindowCurtains(Number(e.target.value))} 
          placeholder="Enter number of window curtains"
        />
      </div>

      <div className="form-group">
        <label htmlFor="doorCurtains">How many door curtains would you like to clean?</label>
        <input 
          type="number" 
          id="doorCurtains" 
          value={doorCurtains} 
          onChange={(e) => setDoorCurtains(Number(e.target.value))} 
          placeholder="Enter number of door curtains"
        />
      </div>

      <button className="calculate-btn" onClick={calculateTotal}>Calculate Quote</button>

      <div className="quote-total">
        <h3>Total Quote: ${total}</h3>
      </div>
    </div>
  );
};

export default CommercialQuoteForm;
