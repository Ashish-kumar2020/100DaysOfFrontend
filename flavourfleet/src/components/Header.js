import React from "react";
import Logo from "../Assets/logo.png";
const Header = () => {
  return (
    <>
      <div className="flex items-center shadow-lg relative z-10 bg-gradient-to-b from-transparent to-green">
        <div>
          <img
            src={Logo}
            alt="Company Logo"
            className="h-[80px] ml-[35px] p-[7px] cursor-pointer"
          />
        </div>
        <div className="flex-grow">
          <ul className="flex justify-end">
            <li className="mr-[50px] cursor-pointer transition-transform transform hover:scale-125">
              Home
            </li>
            <li className="mr-[50px] cursor-pointer transition-transform transform hover:scale-125">
              About
            </li>
            <li className="mr-[50px] cursor-pointer transition-transform transform hover:scale-125">
              Cart
            </li>
            <li className="mr-[50px] cursor-pointer transition-transform transform hover:scale-125">
              User
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
