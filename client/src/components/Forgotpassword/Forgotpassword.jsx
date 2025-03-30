import React from 'react';
import './forgotpassword.css'; // Ensure to add styles in App.css or equivalent

const VerificationScreen = () => {
  return (
    <div className="verification-container">
      <div className="header">
        <h1 className="eventor-title">EVENTOR</h1>
        <p className="eventor-subtitle">Stay updated, stay organized, and never miss out. With Eventor!</p>
      </div>
      <div className="verification-box">
        <h2>Verify it is you:</h2>
        <p>We just sent you a verification code, please check your email</p>
        <input type="text" placeholder="Enter code" className="code-input" />
        <div className="button-container">
          <button className="verify-button">Verify</button>
          <button className="resend-button">Resend Code</button>
        </div>
        <button className="back-button">Back to log in</button>
      </div>
    </div>
  );
};

export default VerificationScreen;