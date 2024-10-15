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
      <h1>Welcome to Aeti Cleaning Services</h1>
      <p>We offer the best cleaning services for homes and offices.</p>
      <div class="hero">
        <img
          src={require("../assets/hero.jpg")}
          alt="Our Cleaning Service"
          className="heroimg"
        />
        <p className="description">
          Aeti Cleaning Services is proudly based in Western Australia, Perth,
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
      <ul className="reason">
        <h2>Comprehensive Residential Cleaning</h2>
        <div className="rescont">
          <img
            src={require("../assets/residential.jpg")}
            alt="Comprehensive Residential Cleaning"
            className="resimg"
          />
          <p className="points">
            Our comprehensive residential cleaning services cater to all your
            home cleaning needs, whether it’s a routine weekly maintenance or a
            deep seasonal clean. We tailor our services to fit the unique
            requirements of your household, ensuring that every space—from the
            kitchen to the living room and bedrooms—is left sparkling clean. No
            corner is overlooked, and we pay close attention to high-traffic
            areas, dust-prone zones, and hard-to-reach spots. With our
            professional touch, your home will not only look fresh but also feel
            more comfortable and inviting for your family.
          </p>
        </div>

        <h2>Efficient Commercial Cleaning</h2>
        <div className="comcont"> 
          <img
            src={require("../assets/commercial.jpeg")}
            alt="Efficient Commercial Cleaning"
            className="comimg"
          />
          <p className="points">
            A clean workspace is crucial for a productive and professional
            atmosphere, and our efficient commercial cleaning services are
            designed to meet that need. We work with offices, retail spaces, and
            other commercial properties to maintain a spotless and hygienic
            environment, ensuring that your business always puts its best foot
            forward. From regular cleaning schedules to one-time deep cleans, we
            ensure that your premises remain immaculate, enhancing employee
            productivity and creating a welcoming space for clients and visitors
            alike. Our approach combines thoroughness with efficiency, so your
            workspace stays pristine without disrupting daily operations.
          </p>
        </div>

        <h2>Specialized Deep Cleaning</h2>
        <div className="deepcont">
          <img
            src={require("../assets/deep.jpg")}
            alt="Specialized Deep Cleaning"
            className="deepimg"
          />
          <p className="points">
            Our specialized deep cleaning services go beyond surface-level
            cleaning to target deeply embedded grime, dirt, and dust. Whether
            you need a post-renovation cleanup, move-in/move-out services, or
            just an intensive annual refresh, we’re equipped to handle the
            toughest cleaning tasks. We use advanced techniques and eco-friendly
            products to thoroughly clean every nook and cranny, from carpets and
            upholstery to tiles and grout. Our deep cleaning services not only
            restore the cleanliness of your space but also improve the overall
            hygiene, leaving your home or office gleaming and refreshed.
          </p>
        </div>
      </ul>

      {/* Book Now button */}
      <button onClick={handleBookNow}>Book Now</button>

      {/* Display the form if showForm is true */}
      {showForm && (
        <BookingForm
          serviceType={serviceType}
          setServiceType={setServiceType}
        />
      )}

      {/* Display total quote if calculated */}
      {total > 0 && <h2>Your Total Quote: ${total}</h2>}
    </div>
  );
};

export default Home;
