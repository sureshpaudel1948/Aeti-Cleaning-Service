import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <div className="contact-page">
      <div className="contact-copy">
        <p className="eyebrow">Contact us</p>
        <h1>Let’s create a cleaner routine that fits your home.</h1>
        <p>
          Reach out to arrange a quote, ask about laundry delivery or discuss the best care plan for your space.
        </p>
        <div className="contact-details">
          <p><strong>Email:</strong> aeticleaningservices@gmail.com</p>
          <p><strong>Phone:</strong> +61 234 567 890</p>
          <p><strong>Address:</strong> 113 Renou St, East Cannington, Perth-WA, Australia</p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <textarea placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <button type="submit">Send enquiry</button>
      </form>
    </div>
  );
};

export default Contact;
