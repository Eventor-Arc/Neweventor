import React from 'react';
import './Account.css'; // Ensure to create this CSS file for styling

const Account = ({ userData }) => {
  return (
    <div className="account-container">
      <header className="header">
        <h1>Eventor</h1>
        <input type="text" placeholder="Search events" className="search-bar" />
      </header>
      <div className="account-details">
        <div className="profile-pic">
          <img src={userData.profilePicture} alt="Profile" />
        </div>
        <div className="info">
          <h2>Account</h2>
          <div className="info-row">
            <strong>Name:</strong> {`${userData.firstName} ${userData.middleName} ${userData.lastName}`}
          </div>
          <div className="info-row">
            <strong>Email:</strong> {userData.email}
          </div>
          <div className="info-row">
            <strong>ID Number:</strong> {userData.idNumber}
          </div>
          <div className="info-row">
            <strong>Course:</strong> {userData.course}
          </div>
        </div>
      </div>
      <div className="button-group">
        <button className="back-button">Back</button>
        <button className="save-button">Save Changes</button>
      </div>
    </div>
  );
};

export default Account;