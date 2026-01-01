import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Navbar.css";
import unity from "../../assets/logo/unity.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dropdownRef = useRef(null);

  // Outside click handler
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <img src={unity} alt="Logo" />
      </div>

      {/* Mobile icon */}
      <div className="mobile-icon" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Links */}
      <ul className={`nav-links ${mobileMenu ? "active" : ""}`}>
        <li>HOME</li>
        <li>ABOUT</li>

        {/* Sister Concern Dropdown */}
        <li
          className="dropdown"
          ref={dropdownRef}
          onClick={() => setServicesDropdown(!servicesDropdown)}
        >
          SISTER CONCERN <MdKeyboardArrowDown />
          <ul className={`dropdown-menu ${servicesDropdown ? "show" : ""}`}>
            <li>ICONIC DIGITAL SOLUTIONS</li>
            <li>ICONIC FURNITURE LTD</li>
            <li>ICONIC SOFT LTD</li>
            <li>ICONIC TOURS & TRAVELS LTD</li>
            <li>ICONIC HAJJ GROUP</li>
            <li>ICONIC HOLIDAYS</li>
            <li>ICONIC SHIKHON</li>
            <li>ICONIC MOTORS</li>
          </ul>
        </li>

        <li>GREEN LAND</li>
        <li>CONTACT</li>
      </ul>

      {/* Right Side Auth */}
      <div className="auth-section">
        {!isLoggedIn ? (
          <>
            <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
              Login
            </button>
            <button className="register-btn">Registration</button>
          </>
        ) : (
          <button className="logout-main-btn" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
