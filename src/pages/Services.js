import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const services = [
  {
    id: 1,
    name: "Carpet & Rug Care",
    quoteRoute: "/residential-quote",
    quoteLabel: "Residential quote",
    image: "carpet&rug.jpg",
    tagline: "Soft, fresh and stain-ready floors",
    description:
      "From carpet per room to rug refreshes, we bring fabrics back to life with careful stain removal and fibre-safe treatment.",
    price: "From $45 per room",
    details: [
      { description: "Carpet per room", price: "$45" },
      { description: "Rugs", price: "$40 each" },
    ],
  },
  {
    id: 2,
    name: "Upholstery & Mattress Care",
    quoteRoute: "/residential-quote",
    quoteLabel: "Residential quote",
    image: "upholstery&mattress.jpg",
    tagline: "Comfort that feels as clean as it looks",
    description:
      "We refresh couches, upholstery and mattresses in single, double and king sizes with gentle fabric care.",
    price: "From $35 per item",
    details: [
      { description: "Couch/Upholstery", price: "$35" },
      { description: "Mattress (Single)", price: "$60" },
      { description: "Mattress (Double)", price: "$80" },
      { description: "Mattress (King)", price: "$100" },
    ],
  },
  {
    id: 3,
    name: "Curtains, Blinds & Windows",
    quoteRoute: "/commercial-quote",
    quoteLabel: "Commercial quote",
    image: "curtains&blinds.webp",
    tagline: "Let the light in without the dust",
    description:
      "Polish window and door treatments, plus glass surfaces, for a cleaner and brighter finish.",
    price: "From $65 per window treatment",
    details: [
      { description: "Curtains/Blinds (Window)", price: "$65" },
      { description: "Curtains/Blinds (Door)", price: "$90" },
      { description: "Window cleaning", price: "$15 per window" },
    ],
  },
  {
    id: 4,
    name: "Laundry & Delivery",
    quoteRoute: "/residential-quote",
    quoteLabel: "Residential quote",
    image: "laundary&delivery.jpg",
    tagline: "The practical service that saves time",
    description:
      "Choose washing, drying, ironing and folding with effortless delivery for an extra $10.",
    price: "From $8 per load",
    details: [
      { description: "Washing", price: "$8 per load" },
      { description: "Drying", price: "$6 per load" },
      { description: "Ironing", price: "$5 per load" },
      { description: "Folding", price: "$3 per load" },
      { description: "Delivery", price: "$10 extra" },
    ],
  },
];

const Services = () => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(null);

  const toggleDetails = (id) => {
    setShowDetails(showDetails === id ? null : id);
  };

  const handleQuoteRequest = (service) => {
    // Navigate to the quote form that best matches the selected service
    if (service?.quoteRoute) {
      navigate(service.quoteRoute, { state: { selectedService: service.name } });
    } else {
      // fallback to residential quote
      navigate('/residential-quote', { state: { selectedService: service.name } });
    }
  };

  return (
    <div className="services-page">
      <section className="services-hero">
        <p className="eyebrow">Our services</p>
        <h1>Modern cleaning and laundry support, tailored for your routine.</h1>
        <p>
          Browse our most requested services below and request a quote for the care you need.
        </p>
      </section>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.id}>
            {service.image && (
              <div className="service-card-image">
                <img src={require(`../assets/${service.image}`)} alt={service.name} />
              </div>
            )}
            <div className="service-card-top">
              <div className="service-card-badge">{service.quoteLabel}</div>
              <h2>{service.name}</h2>
              <p className="service-tagline">{service.tagline}</p>
              <p className="description">{service.description}</p>
              <p className="price">{service.price}</p>
            </div>

            <div className="service-actions">
              <button className="details-btn" onClick={() => toggleDetails(service.id)}>
                {showDetails === service.id ? "Hide pricing" : "View pricing"}
              </button>
              <button className="quote-btn" onClick={() => handleQuoteRequest(service)}>
                Request a quote
              </button>
            </div>

            {showDetails === service.id && (
              <div className="pricing-details">
                <ul>
                  {service.details.map((item, index) => (
                    <li key={index}>
                      <span>{item.description}</span>
                      <strong>{item.price}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default Services;
