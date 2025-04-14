import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";
import { FaSearch, FaBell, FaUsers, FaHome, FaCalendarAlt, FaCog } from "react-icons/fa";
import EventorLogo from "../assets/eventor_logo.png"; // Ensure this file exists

const Header = () => {
  const [activeIcon, setActiveIcon] = useState(null); // No default active
  const navigate = useNavigate(); 

  const handleIconClick = (iconName, path) => {
    setActiveIcon(iconName);
    navigate(path);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src={EventorLogo} alt="Eventor Logo" className="logo-image" />
      </div>
      
      {/* Search Bar */}
      <div className="navbar-search">
        <FaSearch className="search-icon" title="Search" />
        <input type="text" placeholder="Search" />
      </div>

      {/* Icons Section */}
      <div className="navbar-icons">
        <div 
          className={`icon-container ${activeIcon === "home" ? "active" : ""}`} 
          onClick={() => handleIconClick("home", "/ongoing")}
        >
          <FaHome className="icon" />
          <span className="icon-title">Home</span>
        </div>

        <div 
          className={`icon-container ${activeIcon === "notification" ? "active" : ""}`} 
          onClick={() => handleIconClick("notification", "/notification")}
        >       
          <FaBell className="icon" />
          <span className="icon-title">Notification</span>
        </div>

        <div 
          className={`icon-container ${activeIcon === "calendar" ? "active" : ""}`} 
          onClick={() => handleIconClick("calendar", "/calendar2025")}
        >       
          <FaCalendarAlt className="icon" />
          <span className="icon-title">Calendar</span>
        </div>

        <div
          className={`icon-container ${activeIcon === "community" ? "active" : ""}`}
          onClick={() => handleIconClick("community", "/community")}
        >
          <FaUsers className="icon" />
          <span className="icon-title">Community</span>
        </div>
        
        <div
          className={`icon-container ${activeIcon === "settings" ? "active" : ""}`} 
          onClick={() => handleIconClick("settings", "/settings")}
        >
          <FaCog className="icon" />
          <span className="icon-title">Settings</span>
        </div>
      </div> 
    </nav>
  );
};

export default Header;