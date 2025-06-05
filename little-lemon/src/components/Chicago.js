import React from "react";
import "../css/Chicago.css";
import owners from "../assets/owners.jpg";

const Chicago = () => {
  return (
    <header className="chicago">
      <div className="chicago-content">
        <div className="chicago-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are Mario and Adrian, two brothers from Chicago who serve traditional Mediterranean cuisine with a modern twist in our family-owned restaurant. 
          </p>
        </div>
        <div className="chicago-image">
          <img src={owners} alt="Owners" />
        </div>
      </div>
    </header>
  );
};

export default Chicago;
