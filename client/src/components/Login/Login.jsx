import React from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import EventorLogo from '../../assets/eventor_logo.png';

const Login = () => {
const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Left Side: Branding */}
        <div className="branding">
          <img src={EventorLogo} alt="Eventor Logo" className="logo-image" />
          <p className="branding-text">
            Stay updated, stay organized, <br />
            and never miss out. With Eventor!
          </p>
        </div>
        
        {/* Right Side: Login Form */}
        <div className="login-form">
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button className="login-button">Log In</button>
          <p className="forgot-password">Forgot password?</p>
          <hr className="divider" />
          <button className="create-account" onClick={() => navigate("/signup")}>Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
