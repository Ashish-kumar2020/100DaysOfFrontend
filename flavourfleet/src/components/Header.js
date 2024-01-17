import React from "react";
import Logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="flex items-center shadow-lg relative z-10 bg-gradient-to-b from-transparent to-green">
        <div>
          <Link to="/">
            <img
              src={Logo}
              alt="Company Logo"
              className="h-[80px] ml-[35px] p-[7px] cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex-grow">
          <ul className="flex justify-end">
            <Link to="/home">
              <li className="mr-[50px] cursor-pointer transition-transform transform hover:scale-125">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="mr-[50px] cursor-pointer transition-transform transform hover:scale-125">
                About
              </li>
            </Link>
            <Link to="/cart">
              <li className="mr-[50px] cursor-pointer transition-transform transform hover:scale-125">
                Cart
              </li>
            </Link>
            <Link to="/user">
              <li className="mr-[50px] cursor-pointer transition-transform transform hover:scale-125">
                User
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
