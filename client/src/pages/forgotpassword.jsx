import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/forgotpassword.css";
import LOGO from "../assets/eventor_logo.png";

const ForgotPassword = () => {
  const navigate = useNavigate(); // React Router Hook for navigation

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Password reset link sent to your email!");
  };

  return (
    <div className="forgot-password-container">
      {/* Left Section - Logo and Text */}
      <div className="left-section">
        <img src={LOGO} alt="Brand Logo" className="brand-logo" />
        <p className="subtitle">
          Stay updated, stay organized, and never miss out. With Eventor!
        </p>
      </div>

      {/* Right Section - Forgot Password Form */}
      <div className="right-section">
        <h2 className="form-title">Forgot Password?</h2>
        <p className="instruction">Enter your email to receive a reset link.</p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" className="input-field" required />
          
          
          <button type="submit" className="submit-button">Send Reset Link</button>
        </form>
        <button className="back-button" onClick={() => navigate("/login")}>Back to Login</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
