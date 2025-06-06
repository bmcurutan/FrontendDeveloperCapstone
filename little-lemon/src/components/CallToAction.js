import React from "react";
import { Link } from "react-router";
import "../css/CallToAction.css"; 
import food from "../assets/food.jpg";

const CallToAction = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button aria-label="On Click">
            <Link to="/reservations">Reserve a Table</Link>
          </button>
        </div>
        <div className="header-image">
          <img src={food} alt="Mediterranean food" />
        </div>
      </div>
    </header>
  );
};

export default CallToAction;
