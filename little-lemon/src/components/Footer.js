import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.svg";
import "../css/Footer.css";

const Footer = () => {
  return (
    <nav className="footer">
      <div className="footer-content">
        <div className="footer-logo">
            <Link to="/">
            <img src={logo} alt="Little Lemon Logo" />
            </Link>
        </div>

        <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/">Order Online</Link></li>
            <li><Link to="/">Login</Link></li>
        </ul>

        <ul className="footer-links">
            <li>123 Main St.<br />Chicago, IL 98765</li>
            <li>(123) 456-7890</li>
            <li><Link to="/">info@littlelemon.com</Link></li>
        </ul>

        <ul className="footer-links">
            <li><Link to="/">Facebook</Link></li>
            <li><Link to="/">Instagram</Link></li>
            <li><Link to="/">Yelp</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
