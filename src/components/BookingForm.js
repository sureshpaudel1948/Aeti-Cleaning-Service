import React, { useState, useEffect } from "react";
import "../components/BookNowForm.css";
import "../components/ResidentialQuoteForm.css";
import "../components/CommercialQuoteForm.css";
import "../components/DeepCleaningQuoteForm.css";
import emailjs from "emailjs-com";
import calculateTotal from "../utils/calculateTotal.js";

const BookingForm = () => {
  const [serviceType, setServiceType] = useState("");
  const [carpets, setCarpets] = useState(0);
  const [rugs, setRugs] = useState(0);
  const [couches, setCouches] = useState(0);
  const [singleMattresses, setSingleMattresses] = useState(0);
  const [doubleMattresses, setDoubleMattresses] = useState(0);
  const [kingMattresses, setKingMattresses] = useState(0);
  const [windowCurtains, setWindowCurtains] = useState(0);
  const [doorCurtains, setDoorCurtains] = useState(0);
  const [windows, setWindows] = useState(0);
  const [washLoads, setWashLoads] = useState(0);
  const [dryLoads, setDryLoads] = useState(0);
  const [ironLoads, setIronLoads] = useState(0);
  const [foldLoads, setFoldLoads] = useState(0);
  const [delivery, setDelivery] = useState(false);
  const [groutCleaning, setGroutCleaning] = useState(false);
  const [bathrooms, setBathrooms] = useState(0);
  const [kitchenHallwayCleaning, setKitchenHallwayCleaning] = useState(false);
  const [mouldGroutCleaning, setMouldGroutCleaning] = useState(false);
  const [total, setTotal] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();
    const totalPrice = calculateTotal(serviceType, {
      carpets,
      rugs,
      couches,
      singleMattresses,
      doubleMattresses,
      kingMattresses,
      windowCurtains,
      doorCurtains,
      windows,
      washLoads,
      dryLoads,
      ironLoads,
      foldLoads,
      delivery,
      bathrooms,
      groutCleaning,
      kitchenHallwayCleaning,
      mouldGroutCleaning,
    });

    document.getElementById("total_quote_input").value = totalPrice;

    const formData = new FormData(e.target);
    formData.append("total_quote", totalPrice);
    formData.append("service_type", serviceType);

    if (serviceType === "carpet") {
      if (carpets > 0) formData.append("carpets", carpets);
      if (rugs > 0) formData.append("rugs", rugs);
    } else if (serviceType === "upholstery") {
      if (couches > 0) formData.append("couches", couches);
      if (singleMattresses > 0) formData.append("singleMattresses", singleMattresses);
      if (doubleMattresses > 0) formData.append("doubleMattresses", doubleMattresses);
      if (kingMattresses > 0) formData.append("kingMattresses", kingMattresses);
    } else if (serviceType === "curtains") {
      if (windowCurtains > 0) formData.append("windowCurtains", windowCurtains);
      if (doorCurtains > 0) formData.append("doorCurtains", doorCurtains);
    } else if (serviceType === "laundry") {
      if (washLoads > 0) formData.append("washLoads", washLoads);
      if (dryLoads > 0) formData.append("dryLoads", dryLoads);
      if (ironLoads > 0) formData.append("ironLoads", ironLoads);
      if (foldLoads > 0) formData.append("foldLoads", foldLoads);
      formData.append("delivery", delivery ? "Yes" : "No");
    } else if (serviceType === "window") {
      if (windows > 0) formData.append("windows", windows);
    } else if (serviceType === "deep") {
      if (bathrooms > 0) formData.append("bathrooms", bathrooms);
      formData.append("groutCleaning", groutCleaning ? "Yes" : "No");
      formData.append("kitchenHallwayCleaning", kitchenHallwayCleaning ? "Yes" : "No");
      formData.append("mouldGroutCleaning", mouldGroutCleaning ? "Yes" : "No");
    }

    emailjs
      .sendForm(
        "service_72gbgi8",
        "template_84p0hcy",
        e.target,
        "UmVoIH6pHds8c_SaI"
      )
      .then(
        () => {
          alert("Booking request sent successfully!");
        },
        () => {
          alert("Failed to send booking request. Please try again later.");
        }
      );

    e.target.reset();
    setTotal(0);
    setServiceType("");
  };

  useEffect(() => {
    const totalPrice = calculateTotal(serviceType, {
      carpets,
      rugs,
      couches,
      singleMattresses,
      doubleMattresses,
      kingMattresses,
      windowCurtains,
      doorCurtains,
      windows,
      washLoads,
      dryLoads,
      ironLoads,
      foldLoads,
      delivery,
      bathrooms,
      groutCleaning,
      kitchenHallwayCleaning,
      mouldGroutCleaning,
    });
    setTotal(totalPrice);
  }, [
    serviceType,
    carpets,
    rugs,
    couches,
    singleMattresses,
    doubleMattresses,
    kingMattresses,
    windowCurtains,
    doorCurtains,
    windows,
    washLoads,
    dryLoads,
    ironLoads,
    foldLoads,
    delivery,
    bathrooms,
    groutCleaning,
    kitchenHallwayCleaning,
    mouldGroutCleaning,
  ]);

  const handleNumber = (setter) => (e) => {
    setter(Math.max(0, Number(e.target.value)));
  };

  return (
    <form className="booking-form" onSubmit={sendEmail}>
      <h2>Book Your Cleaning Service</h2>

      <div className="form-group">
        <label>Full Name:</label>
        <input type="text" name="full_name" placeholder="Enter your full name" required />
      </div>
      <div className="form-group">
        <label>Email Address:</label>
        <input type="email" name="email" placeholder="Enter your email" required />
      </div>
      <div className="form-group">
        <label>Phone Number:</label>
        <input type="tel" name="phone" placeholder="Enter your phone number" required />
      </div>
      <div className="form-group">
        <label>Service Type:</label>
        <select
          name="service_type"
          required
          onChange={(e) => {
            setServiceType(e.target.value);
            setTotal(0);
          }}
        >
          <option value="">Select Service</option>
          <option value="carpet">Carpet & Rug Care</option>
          <option value="upholstery">Upholstery & Mattress Care</option>
          <option value="curtains">Curtains & Blinds Care</option>
          <option value="laundry">Laundry & Delivery</option>
          <option value="window">Window Cleaning</option>
          <option value="deep">Deep Cleaning</option>
        </select>
      </div>

      {serviceType === "carpet" && (
        <div className="quote-form">
          <h3>Carpet & Rug Care</h3>
          <div className="form-group">
            <label htmlFor="carpets">How many rooms of carpet would you like cleaned?</label>
            <input type="number" id="carpets" name="carpets" value={carpets} onChange={handleNumber(setCarpets)} placeholder="Enter number of rooms" />
          </div>
          <div className="form-group">
            <label htmlFor="rugs">How many rugs would you like cleaned?</label>
            <input type="number" id="rugs" name="rugs" value={rugs} onChange={handleNumber(setRugs)} placeholder="Enter number of rugs" />
          </div>
          {total > 0 && <h3>Total Quote: ${total}</h3>}
        </div>
      )}

      {serviceType === "upholstery" && (
        <div className="quote-form">
          <h3>Upholstery & Mattress Care</h3>
          <div className="form-group">
            <label htmlFor="couches">How many couch seats or upholstery pieces would you like cleaned?</label>
            <input type="number" id="couches" name="couches" value={couches} onChange={handleNumber(setCouches)} placeholder="Enter number of items" />
          </div>
          <div className="form-group">
            <label htmlFor="singleMattresses">Single mattresses</label>
            <input type="number" id="singleMattresses" name="singleMattresses" value={singleMattresses} onChange={handleNumber(setSingleMattresses)} placeholder="Enter quantity" />
          </div>
          <div className="form-group">
            <label htmlFor="doubleMattresses">Double mattresses</label>
            <input type="number" id="doubleMattresses" name="doubleMattresses" value={doubleMattresses} onChange={handleNumber(setDoubleMattresses)} placeholder="Enter quantity" />
          </div>
          <div className="form-group">
            <label htmlFor="kingMattresses">King mattresses</label>
            <input type="number" id="kingMattresses" name="kingMattresses" value={kingMattresses} onChange={handleNumber(setKingMattresses)} placeholder="Enter quantity" />
          </div>
          {total > 0 && <h3>Total Quote: ${total}</h3>}
        </div>
      )}

      {serviceType === "curtains" && (
        <div className="quote-form">
          <h3>Curtains & Blinds Care</h3>
          <div className="form-group">
            <label htmlFor="windowCurtains">Window curtains or blinds</label>
            <input type="number" id="windowCurtains" name="windowCurtains" value={windowCurtains} onChange={handleNumber(setWindowCurtains)} placeholder="Enter quantity" />
          </div>
          <div className="form-group">
            <label htmlFor="doorCurtains">Door curtains or blinds</label>
            <input type="number" id="doorCurtains" name="doorCurtains" value={doorCurtains} onChange={handleNumber(setDoorCurtains)} placeholder="Enter quantity" />
          </div>
          {total > 0 && <h3>Total Quote: ${total}</h3>}
        </div>
      )}

      {serviceType === "laundry" && (
        <div className="quote-form">
          <h3>Laundry & Delivery</h3>
          <div className="form-group">
            <label htmlFor="washLoads">Washing loads</label>
            <input type="number" id="washLoads" name="washLoads" value={washLoads} onChange={handleNumber(setWashLoads)} placeholder="Enter quantity" />
          </div>
          <div className="form-group">
            <label htmlFor="dryLoads">Drying loads</label>
            <input type="number" id="dryLoads" name="dryLoads" value={dryLoads} onChange={handleNumber(setDryLoads)} placeholder="Enter quantity" />
          </div>
          <div className="form-group">
            <label htmlFor="ironLoads">Ironing loads</label>
            <input type="number" id="ironLoads" name="ironLoads" value={ironLoads} onChange={handleNumber(setIronLoads)} placeholder="Enter quantity" />
          </div>
          <div className="form-group">
            <label htmlFor="foldLoads">Folding loads</label>
            <input type="number" id="foldLoads" name="foldLoads" value={foldLoads} onChange={handleNumber(setFoldLoads)} placeholder="Enter quantity" />
          </div>
          <div className="form-group">
            <label htmlFor="delivery">Add delivery for $10?</label>
            <select id="delivery" name="delivery" value={delivery ? "yes" : "no"} onChange={(e) => setDelivery(e.target.value === "yes")}>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          {total > 0 && <h3>Total Quote: ${total}</h3>}
        </div>
      )}

      {serviceType === "window" && (
        <div className="quote-form">
          <h3>Window Cleaning</h3>
          <div className="form-group">
            <label htmlFor="windows">How many windows would you like cleaned?</label>
            <input type="number" id="windows" name="windows" value={windows} onChange={handleNumber(setWindows)} placeholder="Enter quantity" />
          </div>
          {total > 0 && <h3>Total Quote: ${total}</h3>}
        </div>
      )}

      {serviceType === "deep" && (
        <div className="quote-form">
          <h3>Deep Cleaning</h3>
          <div className="form-group">
            <label htmlFor="groutCleaning">Do you need grout cleaning for areas up to 50 Sqm?</label>
            <select id="groutCleaning" name="groutCleaning" value={groutCleaning ? "yes" : "no"} onChange={(e) => setGroutCleaning(e.target.value === "yes")}>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="bathrooms">How many bathrooms do you need to clean? (Up to 2)</label>
            <input type="number" id="bathrooms" name="bathrooms" value={bathrooms} onChange={(e) => setBathrooms(Math.min(Number(e.target.value), 2))} placeholder="Enter number of bathrooms" min="0" max="2" />
          </div>
          <div className="form-group">
            <label htmlFor="kitchenHallwayCleaning">Do you need deep cleaning for the kitchen and hallway (up to 25 Sqm)?</label>
            <select id="kitchenHallwayCleaning" name="kitchenHallwayCleaning" value={kitchenHallwayCleaning ? "yes" : "no"} onChange={(e) => setKitchenHallwayCleaning(e.target.value === "yes")}>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="mouldGroutCleaning">Do you require mould and grout cleaning for up to 2 bathrooms?</label>
            <select id="mouldGroutCleaning" name="mouldGroutCleaning" value={mouldGroutCleaning ? "yes" : "no"} onChange={(e) => setMouldGroutCleaning(e.target.value === "yes")}>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
          {total > 0 && <h3>Total Quote: ${total}</h3>}
        </div>
      )}

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
        <textarea name="address" placeholder="Enter your address" required></textarea>
      </div>
      <div className="form-group">
        <label>Additional Instructions:</label>
        <textarea name="instructions" placeholder="Enter any special requests"></textarea>
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
