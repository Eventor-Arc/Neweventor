import React from 'react';
import './Register.css'; // Import your CSS for styling

const SignUp = () => {
  return (
    <div className="container">
      <div className="logo-section">
        <h1 className="logo">EVENTOR</h1>
        <p className="tagline">Stay updated, stay organized, and never miss out. With Eventor!</p>
      </div>
      <form className="signup-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="ID Number" required />
        <input type="password" placeholder="New password" required />
        <input type="password" placeholder="Confirm password" required />
        <button type="submit" className="signup-button">Sign Up</button>
        <p className="login-link">Already have an account?</p>
      </form>
    </div>
  );
};

export default SignUp;