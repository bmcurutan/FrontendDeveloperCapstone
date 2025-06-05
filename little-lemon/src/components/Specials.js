import React from "react";
import "../css/Specials.css"; 
import greeksalad from "../assets/greeksalad.jpg";
import bruschetta from "../assets/bruschetta.svg";
import lemondessert from "../assets/lemondessert.jpg";

const specials = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: greeksalad,
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    description: "Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: bruschetta,
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: lemondessert,
  },
]

const Card = ({ title, price, description, image }) => (
  <div className="card">
    <img src={image} alt={title} />
    <div className="card-content">
      <div>
        <span className="card-title">{title}</span>
        <span className="price">{price}</span>
      </div>
      <p>{description}</p>
      <span className="order-link">Order a delivery 🛵</span>
    </div>
  </div>
);

const Specials = () => {
  return (
    <section className="specials">
      <div className="specials-content">
        <div className="specials-text">
          <h1>This Week's Specials</h1>
          <button>Online Menu</button>
        </div>
        <div className="cards-container">
          {specials.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
