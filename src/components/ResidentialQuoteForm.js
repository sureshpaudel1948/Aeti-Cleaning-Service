// src/components/ResidentialQuoteForm.js
import React, { useState } from 'react';
import './ResidentialQuoteForm.css'; // Optional: Create CSS for styling the form
import emailjs from 'emailjs-com'; // Import EmailJS

const ResidentialQuoteForm = () => {
  // State to hold input values and total price
  const [carpets, setCarpets] = useState(0);
  const [couches, setCouches] = useState(0);
  const [smallCurtains, setSmallCurtains] = useState(0);
  const [rugs, setRugs] = useState(0);
  const [bedMattresses, setbedMattresses] = useState(0);
  const [total, setTotal] = useState(0);

  // Prices for each service
  const prices = {
    carpet: 45,
    couch: 35,
    smallCurtain: 30,
    rug: 45,
    bedMattress: 60
  };

  // Calculate the total cost when user inputs values
  const calculateTotal = () => {
    const totalPrice = 
      (carpets * prices.carpet) +
      (couches * prices.couch) +
      (smallCurtains * prices.smallCurtain) +
      (rugs * prices.rug) +
      (bedMattresses * prices.bedMattress);

    setTotal(totalPrice);

    sendEmail(totalPrice); // Send email after calculation
  };

  // EmailJS function to send the quote details
  const sendEmail = (totalPrice) => {
    const templateParams = {
      carpets,
      couches,
      smallCurtains,
      rugs,
      bedMattresses,
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
      <h2>Generate Free Quote - Residential Cleaning</h2>

      <div className="form-group">
        <label htmlFor="carpets">How many rooms of carpet do you want to clean?</label>
        <input 
          type="number" 
          id="carpets" 
          value={carpets} 
          onChange={(e) => setCarpets(Number(e.target.value))}
          placeholder="Enter number of rooms"
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
        <label htmlFor="smallCurtains">How many small curtains in your home do you want to clean?</label>
        <input 
          type="number" 
          id="smallCurtains" 
          value={smallCurtains} 
          onChange={(e) => setSmallCurtains(Number(e.target.value))} 
          placeholder="Enter number of small curtains"
        />
      </div>

      <div className="form-group">
        <label htmlFor="rugs">How many rugs do you want to clean?</label>
        <input 
          type="number" 
          id="rugs" 
          value={rugs} 
          onChange={(e) => setRugs(Number(e.target.value))} 
          placeholder="Enter number of rugs"
        />
      </div>

      <div className="form-group">
        <label htmlFor="bedMattresses">How many Bed Mattresses do you want to clean?</label>
        <input 
          type="number" 
          id="bedMattresses" 
          value={bedMattresses} 
          onChange={(e) => setbedMattresses(Number(e.target.value))} 
          placeholder="Enter number of Bed Mattresses"
        />
      </div>

      <button className="calculate-btn" onClick={calculateTotal}>Calculate Quote</button>

      <div className="quote-total">
        <h3>Total Quote: ${total}</h3>
      </div>
    </div>
  );
};

export default ResidentialQuoteForm;
