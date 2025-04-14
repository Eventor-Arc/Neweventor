import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import "../styles/login.css";
import LOGO from "../assets/eventor_logo.png";

const LoginPage = () => {
  const navigate = useNavigate(); // Navigation Hook
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error messages

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
      // Store the token in local storage or handle it as needed
      localStorage.setItem("token", response.data.token);
      // Redirect to home page
      navigate("/home");
    } catch (error) {
      console.error("There was an error logging in!", error.response.data);
      setError(error.response.data.message); // Set error message
    }
  };

  return (
    <div className="login-container">
      {/* Left Section - Logo and Text */}
      <div className="left-section">
        <img src={LOGO} alt="Brand Logo" className="brand-logo" />
        <p className="subtitle">
          Stay updated, stay organized, and never miss out. With Eventor!
        </p>
      </div>

      {/* Right Section - Login Form */}
      <div className="right-section">
        <h2 className="form-title">Log In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
            required
          />
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
          <button className="create-account" onClick={() => navigate("/ongoing")}>
          Log In
        </button>
        </form>

        <p className="forgot-password" onClick={() => navigate("/forgotpassword")}>
          Forgot Password?
        </p>

        <hr className="divider" />
        <button className="create-account" onClick={() => navigate("/createaccount")}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default LoginPage;