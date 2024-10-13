// src/pages/Home.js
import React, { useState, useEffect } from "react";
import "./Home.css"; //CSS File is imported
import calculateTotal from "../utils/calculateTotal.js";
import BookingForm from "../components/BookingForm.js";


const Home = () => {
  const [showForm, setShowForm] = useState(false); // State to handle form visibility
  const [serviceType, setServiceType] = useState(""); // State to handle service type selection
  const [total, setTotal] = useState(0); // State to store the total calculated price
  
  const handleBookNow = () => {
    setShowForm(!showForm); // Toggle the form display
  };

   // Example function to update the total when the service type changes or form is submitted
   useEffect(() => {
    if (serviceType) {
      const calculatedTotal = calculateTotal(serviceType);
      setTotal(calculatedTotal); // Update total cost
    }
  }, [serviceType]);

 
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
      {showForm && <BookingForm serviceType={serviceType} setServiceType={setServiceType} />}
   
    {/* Display total quote if calculated */}
    {total > 0 && <h2>Your Total Quote: ${total}</h2>}
    </div>
  );
};

export default Home;
