import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <nav className="footer">
      <div className="footer-logo">
        <a href="/">
          <img src={logo} alt="Little Lemon Logo" />
        </a>
      </div>

      Doormat Navigation
      <ul className="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order-online">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>

      Contact
      <ul className="contact">
        <li>Address</li>
        <li>Phone number</li>
        <li>Email</li>
      </ul>

      Social Media Links
      <ul className="social-links">
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Yelp</li>
      </ul>
    </nav>
  );
};

export default Footer;
