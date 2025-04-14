import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/account.css";
import Profile from "../assets/renzprofile.png";

const Account = () => {
    const navigate = useNavigate();
    return (
       <div className="settings-container">
 
          {/* Header Section */}
          <div className="account-header">
             <h2>Account</h2>
          </div>
 
          {/* Profile Picture */}
          <div className="profile-section">
             <img src={Profile} alt="Profile" className="profile-picture" />
          </div>
 
          {/* User Details */}
          <div className="account-details">
             <div className="account-detail">
                <span>Name:</span>
                <span>Renz Jan Limas</span>
             </div>
             <div className="account-detail">
                <span>Email:</span>
                <span>limasimoppkomga99@gmail.com</span>
             </div>
             <div className="account-detail">
                <span>ID number:</span>
                <span>000061145</span>
             </div>
             <div className="account-detail">
                <span>Course:</span>
                <span>Bachelor of Science in Information and Technology</span>
             </div>
          </div>
 
          {/* Action Buttons */}
          <div class="button-container">
          <button onClick={() => navigate(-1)} className="back-button">⬅ Back</button>
    <button class="save-button">Save Changes</button>
</div>
       </div>
    );
 };
 
 export default Account;    