import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import "../styles/createaccount.css";
import LOGO from "../assets/eventor_logo.png";

const CreateAccount = () => {
  const navigate = useNavigate(); // Navigation Hook
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(""); // State for error messages
  const [success, setSuccess] = useState(""); // State for success messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Send a POST request to the backend to register the user
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });
      console.log("Registration successful:", response.data);
      setSuccess("Registration successful! You can now log in."); // Set success message
      setError(""); // Clear any previous error messages
      // Optionally redirect to login page after successful registration
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error("There was an error registering!", error);
      if (error.response) {
        setError(error.response.data.message); // Set error message from server response
      } else {
        setError("An unexpected error occurred. Please try again."); // Fallback error message
      }
      setSuccess(""); // Clear any previous success messages
    }
  };

  return (
    <div className="login-container">
      {/* Left Section - Logo and Text */}
      <div className="left-section">
        <img src={LOGO} alt="Brand Logo" className="brand-logo" />
        <p className="subtitle">
          Join Eventor today! Organize your events effortlessly.
        </p>
      </div>

      {/* Right Section - Create Account Form */}
      <div className="right-section">
        <h2 className="form-title">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input-field"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="input-field"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>

        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        {success && <p className="success-message">{success}</p>} {/* Display success message */}

        <p className="forgot-password" onClick={() => navigate("/login")}>
          Already have an account?
        </p>

        <hr className="divider" />

        {/* Back to Login Button */}
        <button className="create-account" onClick={() => navigate("/login")}>
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;