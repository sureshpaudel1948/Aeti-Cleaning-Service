// src/components/BookingForm.js

import React, { useState, useEffect} from "react";
import "../components/BookNowForm.css";
import "../components/ResidentialQuoteForm.css";
import "../components/CommercialQuoteForm.css";
import "../components/DeepCleaningQuoteForm.css";
import emailjs from "emailjs-com";
import calculateTotal from "../utils/calculateTotal";

const BookingForm = () => {
    const [serviceType, setServiceType] = useState(""); // State to handle service type selection
  
  // State for Residential Cleaning
  const [carpets, setCarpets] = useState(0);
  const [couches, setCouches] = useState(0);
  const [smallCurtains, setSmallCurtains] = useState(0);
  const [rugs, setRugs] = useState(0);
  const [bedMattresses, setbedMattresses] = useState(0);

  // State for Commercial Cleaning
  const [windowCurtains, setWindowCurtains] = useState(0);
  const [doorCurtains, setDoorCurtains] = useState(0);

  // State for Deep Cleaning
  const [groutCleaning, setGroutCleaning] = useState(false);
  const [bathrooms, setBathrooms] = useState(0);
  const [kitchenHallwayCleaning, setKitchenHallwayCleaning] = useState(false);
  const [mouldGroutCleaning, setMouldGroutCleaning] = useState(false);

  // Total calculation state
  const [total, setTotal] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();
    const totalPrice = calculateTotal(serviceType, {
      carpets,
      couches,
      smallCurtains,
      rugs,
      bedMattresses,
      windowCurtains,
      doorCurtains,
      bathrooms,
      groutCleaning,
      kitchenHallwayCleaning,
      mouldGroutCleaning,
    });
    document.getElementById("total_quote_input").value = totalPrice;

    const formData = new FormData(e.target);
    formData.append("total_quote", totalPrice);

    if (serviceType === "residential") {
      formData.append("carpets", carpets || 0);
      formData.append("couches", couches || 0);
      formData.append("smallCurtains", smallCurtains || 0);
      formData.append("rugs", rugs || 0);
      formData.append("bedMattresses", bedMattresses || 0);
    } else if (serviceType === "commercial") {
      formData.append("carpets", carpets || 0);
      formData.append("couches", couches || 0);
      formData.append("smallCurtains", smallCurtains || 0);
      formData.append("windowCurtains", windowCurtains || 0);
      formData.append("doorCurtains", doorCurtains || 0);
    } else if (serviceType === "deep") {
      formData.append("bathrooms", bathrooms || 0);
      formData.append("groutCleaning", groutCleaning ? "Yes" : "No");
      formData.append("kitchenHallwayCleaning", kitchenHallwayCleaning ? "Yes" : "No");
      formData.append("mouldGroutCleaning", mouldGroutCleaning ? "Yes" : "No");
    }

    emailjs
      .sendForm(
        "service_72gbgi8", // Service ID
        "template_84p0hcy", // Template ID
        e.target, // form element
        "UmVoIH6pHds8c_SaI" // User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Booking request sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send booking request. Please try again later.");
        }
      );

    e.target.reset();
  };

   // Handle dynamic total calculation
   useEffect(() => {
    const totalPrice = calculateTotal(serviceType, {
      carpets,
      couches,
      smallCurtains,
      rugs,
      bedMattresses,
      windowCurtains,
      doorCurtains,
      bathrooms,
      groutCleaning,
      kitchenHallwayCleaning,
      mouldGroutCleaning,
    });
    setTotal(totalPrice); // Set the total dynamically
  }, [
    serviceType,
    carpets,
    couches,
    smallCurtains,
    rugs,
    bedMattresses,
    windowCurtains,
    doorCurtains,
    bathrooms,
    groutCleaning,
    kitchenHallwayCleaning,
    mouldGroutCleaning,
  ]);



  const handleChange = (setter) => (e) => {
    setter(Math.max(0, Number(e.target.value)));
  };

  return (
    <form className="booking-form" onSubmit={sendEmail}>
    <h2>Book Your Cleaning Service</h2>

    <div className="form-group">
      <label>Full Name:</label>
      <input
        type="text"
        name="full_name"
        placeholder="Enter your full name"
        required
      />
    </div>
    <div className="form-group">
      <label>Email Address:</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
      />
    </div>
    <div className="form-group">
      <label>Phone Number:</label>
      <input
        type="tel"
        name="phone"
        placeholder="Enter your phone number"
        required
      />
    </div>
    <div className="form-group">
      <label>Service Type:</label>
      <select
        name="service_type"
        required
        onChange={(e) => {
          setServiceType(e.target.value);
          setTotal(0); // Reset total when changing service type
        }}
      >
        <option value="">Select Service</option>
        <option value="residential">Residential Cleaning</option>
        <option value="commercial">Commercial Cleaning</option>
        <option value="deep">Deep Cleaning</option>
      </select>
    </div>

    {/* Conditional rendering of Residential Cleaning Quote Form */}
    {serviceType === "residential" && (
      <div className="quote-form">
        <h2>Residential Cleaning Quote</h2>

        <div className="form-group">
          <label htmlFor="carpets">
            How many rooms of carpet do you want to clean?
          </label>
          <input
            type="number"
            id="carpets"
            name="carpets"
            value={carpets}
            onChange={handleChange(setCarpets)}
            placeholder="Enter number of rooms"
          />
        </div>

        <div className="form-group">
          <label htmlFor="couches">
            How many couch seats would you like to clean?
          </label>
          <input
            type="number"
            id="couches"
            name="couches"
            value={couches}
            onChange={handleChange(setCouches)}
            placeholder="Enter number of couch seats"
          />
        </div>

        <div className="form-group">
          <label htmlFor="smallCurtains">
            How many small curtains in your home do you want to clean?
          </label>
          <input
            type="number"
            id="smallCurtains"
            name="smallCurtains"
            value={smallCurtains}
            onChange={handleChange(setSmallCurtains)}
            placeholder="Enter number of small curtains"
          />
        </div>

        <div className="form-group">
          <label htmlFor="rugs">
            How many rugs do you want to clean?
          </label>
          <input
            type="number"
            id="rugs"
            name="rugs"
            value={rugs}
            onChange={handleChange(setRugs)}
            placeholder="Enter number of rugs"
          />
        </div>

        <div className="form-group">
          <label htmlFor="bedMattresses">
            How many bed mattresses do you want to clean?
          </label>
          <input
            type="number"
            id="bedMattresses"
            name="bedMattresses"
            value={bedMattresses}
            onChange={handleChange(setbedMattresses)}
            placeholder="Enter number of bed mattresses"
          />
        </div>

        {total > 0 && <h3>Total Quote: ${total}</h3>}
      </div>
    )}
    {serviceType === "commercial" && (
      <div className="quote-form">
        <h2>Commercial Cleaning Quote</h2>

        <div className="form-group">
          <label htmlFor="carpets">
            How many carpets would you like to clean?
          </label>
          <input
            type="number"
            id="carpets"
            name="carpets"
            value={carpets}
            onChange={handleChange(setCarpets)}
            placeholder="Enter number of carpets"
          />
        </div>

        <div className="form-group">
          <label htmlFor="couches">
            How many couch seats would you like to clean?
          </label>
          <input
            type="number"
            id="couches"
            name="couches"
            value={couches}
            onChange={handleChange(setCouches)}
            placeholder="Enter number of couch seats"
          />
        </div>

        <div className="form-group">
          <label htmlFor="smallCurtains">
            How many small curtains would you like to clean?
          </label>
          <input
            type="number"
            id="smallCurtains"
            name="smallCurtains"
            value={smallCurtains}
            onChange={handleChange(setSmallCurtains)}
            placeholder="Enter number of small curtains"
          />
        </div>

        <div className="form-group">
          <label htmlFor="windowCurtains">
            How many window curtains would you like to clean?
          </label>
          <input
            type="number"
            id="windowCurtains"
            name="windowCurtains"
            value={windowCurtains}
            onChange={handleChange(setWindowCurtains)}
            placeholder="Enter number of window curtains"
          />
        </div>

        <div className="form-group">
          <label htmlFor="doorCurtains">
            How many door curtains would you like to clean?
          </label>
          <input
            type="number"
            id="doorCurtains"
           name="doorCurtains"
            value={doorCurtains}
            onChange={handleChange(setDoorCurtains)}
            placeholder="Enter number of door curtains"
          />
        </div>

        {total > 0 && <h3>Total Quote: ${total}</h3>}
      </div>
    )}

    {serviceType === "deep" && (
      <div className="quote-form">
        <h2>Deep Cleaning Quote</h2>

        <div className="form-group">
          <label htmlFor="groutCleaning">
            Do you need grout cleaning for areas up to 50 Sqm?
          </label>
          <select
            id="groutCleaning"
            name="groutCleaning"
            value={groutCleaning}
            onChange={(e) => setGroutCleaning(e.target.value === "yes")}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="bathrooms">
            How many bathrooms do you need to clean? (Up to 2)
          </label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={bathrooms}
            onChange={handleChange((value) => setBathrooms(Math.min(value, 2)))}
            placeholder="Enter number of bathrooms"
            min="0"
            max="2"
          />
        </div>

        <div className="form-group">
          <label htmlFor="kitchenHallwayCleaning">
            Do you need deep cleaning for the kitchen and hallway (up to
            25 Sqm)?
          </label>
          <select
            id="kitchenHallwayCleaning"
            name="kitchenHallwayCleaning"
            value={kitchenHallwayCleaning}
            onChange={(e) =>
              setKitchenHallwayCleaning(e.target.value === "yes")
            }
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="mouldGroutCleaning">
            Do you require mould and grout cleaning for up to 2
            bathrooms?
          </label>
          <select
            id="mouldGroutCleaning"
            name="mouldGroutCleaning"
            value={mouldGroutCleaning}
            onChange={(e) =>
              setMouldGroutCleaning(e.target.value === "yes")
            }
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        {total > 0 && <h3>Total Quote: ${total}</h3>}
      </div>
    )}

    {/* Hidden input to store the total price */}
    <input type="hidden" name="total_quote" id="total_quote_input" />

    <div className="form-group">
      <label>Service Date:</label>
      <input type="date" name="service_date" required />
    </div>
    <div className="form-group">
      <label>Service Time:</label>
      <input type="time" name="service_time" required />
    </div>
    <div className="form-group">
      <label>Address:</label>
      <textarea
        name="address"
        placeholder="Enter your address"
        required
      ></textarea>
    </div>
    <div className="form-group">
      <label>Additional Instructions:</label>
      <textarea
        name="instructions"
        placeholder="Enter any special requests"
      ></textarea>
    </div>
    <div className="form-group">
      <label>Payment Method:</label>
      <select name="payment_method" required>
        <option value="">Select Payment Method</option>
        <option value="cash">Cash</option>
        <option value="credit">Credit Card</option>
        <option value="eft">EFT</option>
        <option value="cheque">Cheque</option>
        <option value="invoice">Invoice</option>
      </select>
    </div>

    <button type="submit">Submit Booking</button>
  </form>
  );
};

export default BookingForm;
