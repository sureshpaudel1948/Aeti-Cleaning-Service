// src/components/DeepCleaningQuoteForm.js
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QuoteToast from './QuoteToast';
import './DeepCleaningQuoteForm.css';

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

  const location = useLocation();
  const navigate = useNavigate();
  const firstInputRef = useRef(null);
  const containerRef = useRef(null);
  const selectedService = location.state?.selectedService;
  const [showToast, setShowToast] = useState(Boolean(selectedService));

  useEffect(() => {
    setShowToast(Boolean(selectedService));

    const serviceName = (selectedService || '').toLowerCase();
    if (serviceName.includes('deep') || serviceName.includes('clean')) {
      setBathrooms((value) => value || 1);
      setKitchenHallwayCleaning(true);
    }

    if (firstInputRef.current) firstInputRef.current.focus();
    if (containerRef.current) {
      containerRef.current.setAttribute('tabindex', '-1');
      containerRef.current.focus({ preventScroll: true });
    }
  }, [selectedService]);

  const backToBook = () => {
    navigate('/', { state: { scrollToBooking: true } });
  };

  // Calculate the total cost when user inputs values
  const calculateTotal = () => {
    const totalPrice = 
      (groutCleaning ? prices.groutCleaning : 0) +
      (bathrooms * prices.bathroomCleaning) +
      (kitchenHallwayCleaning ? prices.kitchenHallwayCleaning : 0) +
      (mouldGroutCleaning ? prices.mouldGroutCleaning : 0);

    setTotal(totalPrice);

  };


  return (
    <div className="quote-form" ref={containerRef}>
      {selectedService && showToast && (
        <QuoteToast
          title="Service selected"
          message={`You picked ${selectedService}. We’ve set a helpful starting point for you.`}
          actionLabel="Book on homepage"
          onAction={backToBook}
          onClose={() => setShowToast(false)}
        />
      )}

      <h2>Generate Free Quote - Deep Cleaning</h2>

      <div className="form-group">
        <label htmlFor="groutCleaning">Do you need grout cleaning for areas up to 50 Sqm?</label>
        <select
          ref={firstInputRef}
          id="groutCleaning"
          value={groutCleaning ? "yes" : "no"} 
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
          value={kitchenHallwayCleaning ? "yes" : "no"}
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
          value={mouldGroutCleaning ? "yes" : "no"}
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
