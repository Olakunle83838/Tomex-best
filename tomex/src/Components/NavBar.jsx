import React, { useState } from "react";
import { NavLink } from "react-router";
import "./navBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navContainer">
      <div className="logo-container">
        <div className="logo">
          <img src="./assets/images/logo-icon.png" alt="" />
          <img src="./assets/images/logo-name.png" alt="" />
          <p className="logo-text">Fresh. Fast. Trusted.</p>
        </div>
      </div>

      {/* Hamburger Toggle Button for Mobile */}
      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Links & Buttons wrapper */}
      <div className={`navLinkContainer ${isOpen ? "open" : ""}`}>
        <ul className="navLinks">
          <li>
            <NavLink
              to="/"
              end
              className="navLink"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/marketplace"
              className="navLink"
              onClick={() => setIsOpen(false)}
            >
              Marketplace
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className="navLink"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navLink"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="navBtns">
          <NavLink
            to="/login"
            className="navBtn navBtn1"
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/role-selection"
            className="navBtn navBtn2"
            onClick={() => setIsOpen(false)}
          >
            Sign up
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
