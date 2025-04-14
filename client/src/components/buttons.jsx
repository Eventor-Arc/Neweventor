import React from "react";
import "./buttons.css"; // Import button styles

const Button = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button className={`custom-button ${className}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
