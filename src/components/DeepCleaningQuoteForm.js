// src/components/DeepCleaningQuoteForm.js
import React, { useState } from 'react';
import './DeepCleaningQuoteForm.css'; // Optional: Create CSS for styling the form
import emailjs from 'emailjs-com'; // Import EmailJS

const DeepCleaningQuoteForm = () => {
  // State to hold input values and total price
  const [groutCleaning, setGroutCleaning] = useState(false);
  const [bathrooms, setBathrooms] = useState(0);
  const [kitchenHallwayCleaning, setKitchenHallwayCleaning] = useState(false);
  const [mouldGroutCleaning, setMouldGroutCleaning] = useState(false);
  const [total, setTotal] = useState(0);

  // Prices for each service
  const prices = {
    groutCleaning: 350,
    bathroomCleaning: 165,
    kitchenHallwayCleaning: 215,
    mouldGroutCleaning: 230
  };

  // Calculate the total cost when user inputs values
  const calculateTotal = () => {
    const totalPrice = 
      (groutCleaning ? prices.groutCleaning : 0) +
      (bathrooms * prices.bathroomCleaning) +
      (kitchenHallwayCleaning ? prices.kitchenHallwayCleaning : 0) +
      (mouldGroutCleaning ? prices.mouldGroutCleaning : 0);

    setTotal(totalPrice);


   sendEmail(totalPrice); // Send email after calculation
  };

  // EmailJS function to send the quote details
  const sendEmail = (totalPrice) => {
    const templateParams = {
      groutCleaning,
      bathrooms,
      kitchenHallwayCleaning,
      mouldGroutCleaning,
      totalPrice
    };

    emailjs.send(
      'service_72gbgi8', //  EmailJS service ID
      'template_84p0hcy', // EmailJS template ID
      templateParams,
      'UmVoIH6pHds8c_SaI' // EmailJS user ID
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
      <h2>Generate Free Quote - Deep Cleaning</h2>

      <div className="form-group">
        <label htmlFor="groutCleaning">Do you need grout cleaning for areas up to 50 Sqm?</label>
        <select
          id="groutCleaning"
          value={groutCleaning}
          onChange={(e) => setGroutCleaning(e.target.value === 'yes')}
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="bathrooms">How many bathrooms do you need to clean? (Up to 2)</label>
        <input
          type="number"
          id="bathrooms"
          value={bathrooms}
          onChange={(e) => setBathrooms(Math.min(Number(e.target.value), 2))}
          placeholder="Enter number of bathrooms"
          min="0"
          max="2"
        />
      </div>

      <div className="form-group">
        <label htmlFor="kitchenHallwayCleaning">Do you need deep cleaning for the kitchen and hallway (up to 25 Sqm)?</label>
        <select
          id="kitchenHallwayCleaning"
          value={kitchenHallwayCleaning}
          onChange={(e) => setKitchenHallwayCleaning(e.target.value === 'yes')}
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="mouldGroutCleaning">Do you require mould and grout cleaning for up to 2 bathrooms?</label>
        <select
          id="mouldGroutCleaning"
          value={mouldGroutCleaning}
          onChange={(e) => setMouldGroutCleaning(e.target.value === 'yes')}
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      <button className="calculate-btn" onClick={calculateTotal}>Calculate Quote</button>

      <div className="quote-total">
        <h3>Total Quote: ${total}</h3>
      </div>
    </div>
  );
};

export default DeepCleaningQuoteForm;
