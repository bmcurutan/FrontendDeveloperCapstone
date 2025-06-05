import React from "react";
import "../css/Header.css"; 
import food from "../assets/food.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div className="header-image">
          <img src={food} alt="Mediterranean food" />
        </div>
      </div>
    </header>
  );
};

export default Header;
