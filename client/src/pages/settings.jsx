import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import "../styles/settings.css";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="settings-container">
      <Header />
      {/* Menu Items Section */}
      <div className="settings-menu">
        <div className="menu-item" onClick={() => navigate("/account")}>
          <span className="menu-title">Account</span>
          <span className="menu-description">Manage your profile and details.</span>
          <span className="menu-arrow">→</span>
        </div>

        <div className="menu-item" onClick={() => navigate("/help")}>
          <span className="menu-title">Help and Support</span>
          <span className="menu-description">Get assistance and FAQs.</span>
          <span className="menu-arrow">→</span>
        </div>

        <div className="menu-item" onClick={() => navigate("/aboutus")}>
          <span className="menu-title">About us</span>
          <span className="menu-description">Learn more about Eventor.</span>
          <span className="menu-arrow">→</span>
        </div>

        <div className="menu-item" onClick={() => navigate("/login")}>
          <span className="menu-title">Log out</span>
          <span className="menu-description">Sign out of your account.</span>
          <span className="menu-arrow">→</span>
        </div>
      </div>
    </div>
  );
};

export default Settings;