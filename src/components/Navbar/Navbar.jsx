import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaUserCircle, FaUser, FaEnvelope, FaCog } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Navbar.css";
import unity from "../../assets/logo/unity.png"; 

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesDropdown(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileDropdown(false);
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

        {/* Services Dropdown */}
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

      {/* Profile Dropdown */}
      <div className="profile" ref={profileRef}>
        <FaUserCircle
          size={32}
          className="profile-icon"
          onClick={() => setProfileDropdown(!profileDropdown)}
        />
        <ul className={`profile-menu ${profileDropdown ? "show" : ""}`}>
          <li><FaUser /> <span className="profile-name">John Doe</span></li>
          <li><FaEnvelope /> john.doe@example.com</li>
          <li><FaCog /> Settings</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
