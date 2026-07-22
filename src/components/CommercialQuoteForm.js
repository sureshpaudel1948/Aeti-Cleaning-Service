// src/components/CommercialQuoteForm.js
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QuoteToast from './QuoteToast';
import './CommercialQuoteForm.css';

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

  const location = useLocation();
  const navigate = useNavigate();
  const firstInputRef = useRef(null);
  const containerRef = useRef(null);
  const selectedService = location.state?.selectedService;
  const [showToast, setShowToast] = useState(Boolean(selectedService));

  useEffect(() => {
    setShowToast(Boolean(selectedService));

    const serviceName = (selectedService || '').toLowerCase();
    if (serviceName.includes('carpet')) {
      setCarpets((value) => value || 1);
    }
    if (serviceName.includes('upholstery') || serviceName.includes('couch')) {
      setCouches((value) => value || 1);
    }
    if (serviceName.includes('curtain') || serviceName.includes('window')) {
      setWindowCurtains((value) => value || 1);
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
      (carpets * prices.carpet) +
      (couches * prices.couch) +
      (smallCurtains * prices.smallCurtain) +
      (windowCurtains * prices.windowCurtain) +
      (doorCurtains * prices.doorCurtain);

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

      <h2>Generate Free Quote - Commercial Cleaning</h2>

      <div className="form-group">
        <label htmlFor="carpets">How many carpets would you like to clean?</label>
        <input 
          ref={firstInputRef}
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
