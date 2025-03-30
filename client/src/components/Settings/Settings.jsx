import React from 'react';
import './Settings.css';

const Settings = () => {
  const settingsOptions = [
    {
      title: 'Account',
      description: 'Manage your profile and details.',
    },
    {
      title: 'Notification',
      description: 'Customize event alerts and updates.',
    },
    {
      title: 'Preference',
      description: 'Set your personal app settings.',
    },
    {
      title: 'Privacy and security',
      description: 'Control your data and safety.',
    },
    {
      title: 'Help and Support',
      description: 'Get assistance and FAQs.',
    },
    {
      title: 'About us',
      description: 'Learn more about Eventor.',
    },
    {
      title: 'Log out',
      description: 'Sign out of your account.',
    },
  ];

  return (
    <div className="settings-container">
      {settingsOptions.map((option, index) => (
        <div className="settings-option" key={index}>
          <div className="settings-title">{option.title}</div>
          <div className="settings-description">{option.description}</div>
          <div className="settings-arrow">➔</div>
        </div>
      ))}
    </div>
  );
};

export default Settings;