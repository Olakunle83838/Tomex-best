import React from "react";
import "./navBar.css";

function NavBar() {
  return (
    <div className="navContainer">
      <p className="logo">TOMEX</p>
      <div className="navLinkContainer">
        <ul className="navLinks">
          <li>
            <a href="#" className="navLink">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="navLink">
              Marketplace
            </a>
          </li>
          <li>
            <a href="#" className="navLink">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="navLink">
              Contact
            </a>
          </li>
        </ul>
        <div className="navBtns">
          <p>
            <a href="" className="navBtn navBtn1">
              Login
            </a>
          </p>
          <p>
            <a href="" className="navBtn navBtn2">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
