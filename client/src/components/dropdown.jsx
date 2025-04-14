import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/dropdown.css";

const Dropdown = () => {
  const [selected, setSelected] = useState("On Going"); // State for button text
  const navigate = useNavigate(); // React Router navigation

  const handleNavigation = (event, path, label) => {
    event.preventDefault();
    setSelected(label); // Update the button text
    navigate(path); // Navigate without reloading the page
  };

  return (
    <div className="dropdown">
      <button className="dropbtn">
        {selected} ▼ {/* Add the downward arrow here */}
      </button>
      <div className="dropdown-content">
        <a href="/ongoing" onClick={(e) => handleNavigation(e, "/ongoing", "Ongoing")}>Ongoing</a>
        <a href="/upcoming" onClick={(e) => handleNavigation(e, "/upcoming", "Upcoming")}>Upcoming</a>
        <a href="/archive" onClick={(e) => handleNavigation(e, "/archive", "Archive")}>Archive</a>
      </div>
    </div>
  );
};

export default Dropdown;