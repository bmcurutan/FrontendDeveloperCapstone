import React from "react";
import "../css/CustomersSay.css"; 

const ratings = [
  {
    rating: "⭐️⭐️⭐️⭐️⭐️",
    testimonial: "Great food. Great service."
  },
  {
    rating: "⭐️⭐️⭐️",
    testimonial: "It was good, but I've had better."
  },
  {
    rating: "⭐️⭐️⭐️⭐️",
    testimonial: "Traditional Mediterranean dishes served with a modern twist."
  },
]

const Card = ({ rating, testimonial }) => (
  <div className="card">
    <div className="card-content">
      <p>
        {rating}
        <br /><br />
        {testimonial}
      </p>
    </div>
  </div>
);

const CustomersSay = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-content">
        <div className="testimonials-text">
          <h1>Testimonials</h1>
        </div>
        <div className="cards-container">
          {ratings.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersSay;
