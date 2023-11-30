import React from "react";
import "../style/header.css";
import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="company logo" />
        </a>
      </div>
      <div className="details">
        <ul>
          <li>Search</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>Signin</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
