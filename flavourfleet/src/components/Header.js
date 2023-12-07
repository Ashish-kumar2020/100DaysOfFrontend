import React from "react";
import "../style/header.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
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
          <Link to="/about">
            <li>About</li>
          </Link>

          <li>Contact Us</li>
          <li>Cart</li>
          <li>Signin</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
