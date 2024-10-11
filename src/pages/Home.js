// src/pages/Home.js
import React, { useState, useEffect } from "react";
import "./Home.css"; //CSS File is imported
import "../components/BookNowForm.css";
import "../components/ResidentialQuoteForm.css";
import "../components/CommercialQuoteForm.css";
import "../components/DeepCleaningQuoteForm.css";
import "../components/ResidentialQuoteForm.css";
import emailjs from "emailjs-com"; // Import EmailJS

const Home = () => {
  const [showForm, setShowForm] = useState(false); // State to handle form visibility
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

  const handleBookNow = () => {
    setShowForm(!showForm); // Toggle the form display
  };
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Calculate the total price before sending the email
    const totalPrice =calculateTotal();

    // Append the total price and other service-specific details to the form data
    const formData = new FormData(e.target);
    formData.append("total_quote", totalPrice);

    // Add additional fields based on service type
    if (serviceType === "residential") {
      formData.append("carpets", carpets);
      formData.append("couches", couches);
      formData.append("smallCurtains", smallCurtains);
      formData.append("rugs", rugs);
      formData.append("bedMattresses", bedMattresses);
    } else if (serviceType === "commercial") {
      formData.append("carpets", carpets);
      formData.append("couches", couches);
      formData.append("smallCurtains", smallCurtains);
      formData.append("windowCurtains", windowCurtains);
      formData.append("doorCurtains", doorCurtains);
    } else if (serviceType === "deep") {
      formData.append("bathrooms", bathrooms);
      formData.append("groutCleaning", groutCleaning ? "Yes" : "No");
      formData.append(
        "kitchenHallwayCleaning",
        kitchenHallwayCleaning ? "Yes" : "No"
      );
      formData.append("mouldGroutCleaning", mouldGroutCleaning ? "Yes" : "No");
    }

    // Send the email using emailjs
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

    e.target.reset(); // Reset form after submission
  };

  const calculateTotal = () => {
    let totalPrice = 0;

    if (serviceType === "residential") {
      totalPrice =
        carpets * 45 +
        couches * 35 +
        smallCurtains * 30 +
        rugs * 45 +
        bedMattresses * 60;
    } else if (serviceType === "commercial") {
      totalPrice =
        carpets * 45 +
        couches * 35 +
        smallCurtains * 30 +
        windowCurtains * 65 +
        doorCurtains * 90;
    } else if (serviceType === "deep") {
      totalPrice = bathrooms * 165;
      if (groutCleaning) totalPrice += 350;
      if (kitchenHallwayCleaning) totalPrice += 215;
      if (mouldGroutCleaning) totalPrice += 230;
    }
    setTotal(totalPrice);
    return totalPrice; // Return the total price directly
};

useEffect(() => {
  calculateTotal(); // Calculate total whenever input values change
}, [
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

  return (
    <div className="home">
      <h1>Welcome to Aeti Cleaning Service</h1>
      <p>We offer the best cleaning services for homes and offices.</p>
      <div class="hero">
        <img
          src={require("../assets/hero.jpg")}
          alt="Our Cleaning Service"
          className="heroimg"
        />
        <p className="description">
          Aeti Cleaning Service is proudly based in Western Australia, Perth,
          and we are dedicated to serving our community with top-tier cleaning
          solutions. Whether it's residential or commercial cleaning, we operate
          with the highest standards of cleanliness and professionalism. Our
          expert team is always there for you, offering reliable, eco-friendly
          cleaning at affordable rates. We believe in putting our customers
          first, which is why we tailor our services to meet your specific needs
          and schedules. Rest assured, you can rely on us for a sparkling clean
          home or workplace, every time.
        </p>
      </div>

      <h1>Why Choose Us?</h1>
      <ul>
        <h2>Comprehensive Residential Cleaning</h2>
        <div className="rescont">
          <img
            src={require("../assets/residential.jpg")}
            alt="Comprehensive Residential Cleaning"
            className="resimg"
          />
          <p className="points">
            Whether it's a weekly tidy-up or a thorough seasonal cleaning, we
            provide tailored residential cleaning services that keep your home
            fresh and spotless. From kitchens to bedrooms, no corner is
            overlooked.
          </p>
        </div>

        <h2>Efficient Commercial Cleaning</h2>
        <div className="comcont">
          <p className="points">
            We understand the importance of a clean and hygienic workspace. Our
            commercial cleaning services ensure your office or business premises
            stay immaculate, helping to create a productive and welcoming
            environment for both employees and clients.
          </p>
          <img
            src={require("../assets/commercial.jpeg")}
            alt="Efficient Commercial Cleaning"
            className="comimg"
          />
        </div>

        <h2>Specialized Deep Cleaning</h2>
        <div className="deepcont">
          <img
            src={require("../assets/deep.jpg")}
            alt="Specialized Deep Cleaning"
            className="deepimg"
          />
          <p className="points">
            Our deep cleaning service is designed to tackle the toughest grime
            and dirt. Whether it’s post-renovation cleaning, move-in/move-out
            services, or just an annual refresh, we use advanced techniques and
            eco-friendly products to leave your space gleaming.
          </p>
        </div>
      </ul>

      {/* Book Now button */}
      <button onClick={handleBookNow}>Book Now</button>

      {/* Display the form if showForm is true */}
      {showForm && (
        <>
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
                    value={carpets}
                    onChange={(e) => setCarpets(Number(e.target.value))}
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
                    value={couches}
                    onChange={(e) => setCouches(Number(e.target.value))}
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
                    value={smallCurtains}
                    onChange={(e) => setSmallCurtains(Number(e.target.value))}
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
                    value={rugs}
                    onChange={(e) => setRugs(Number(e.target.value))}
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
                    value={bedMattresses}
                    onChange={(e) => setbedMattresses(Number(e.target.value))}
                    placeholder="Enter number of bed mattresses"
                  />
                </div>

                <button className="calculate-btn" onClick={calculateTotal}>
                  Calculate Total Quote
                </button>

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
                    value={carpets}
                    onChange={(e) => setCarpets(Number(e.target.value))}
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
                    value={couches}
                    onChange={(e) => setCouches(Number(e.target.value))}
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
                    value={smallCurtains}
                    onChange={(e) => setSmallCurtains(Number(e.target.value))}
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
                    value={windowCurtains}
                    onChange={(e) => setWindowCurtains(Number(e.target.value))}
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
                    value={doorCurtains}
                    onChange={(e) => setDoorCurtains(Number(e.target.value))}
                    placeholder="Enter number of door curtains"
                  />
                </div>

                <button className="calculate-btn" onClick={calculateTotal}>
                  Calculate Total Quote
                </button>

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
                    value={bathrooms}
                    onChange={(e) =>
                      setBathrooms(Math.min(Number(e.target.value), 2))
                    }
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
                    value={mouldGroutCleaning}
                    onChange={(e) =>
                      setMouldGroutCleaning(e.target.value === "yes")
                    }
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>

                <button className="calculate-btn" onClick={calculateTotal}>
                  Calculate Quote
                </button>

                {total > 0 && <h3>Total Quote: ${total}</h3>}
              </div>
            )}

            <button type="submit">Submit Booking</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Home;
