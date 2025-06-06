import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.svg";
import "../css/Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Little Lemon Logo" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/">Order Online</Link></li>
        <li><Link to="/">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
