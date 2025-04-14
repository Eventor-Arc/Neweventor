import React from 'react';
import "../styles/jan.css";

const jan = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">EVENTOR</div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search events"
            className="search-input"
          />
          <i className="fas fa-search search-icon"></i>
        </div>
        <div className="icons">
          <i className="fas fa-home icon"></i>
          <i className="fas fa-users icon"></i>
          <i className="fas fa-calendar-alt icon"></i>
          <i className="fas fa-bell icon"></i>
          <i className="fas fa-cog icon"></i>
        </div>
      </header>
      <main className="main">
        <div className="calendar-container">
          <div className="calendar-header">
            <div className="month-year">January 2025</div>
            <div className="dropdown">
              <button className="dropdown-button">
                <span>Month</span>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
          </div>
          <div className="calendar-grid">
            <div className="day-header">Mon</div>
            <div className="day-header">Tue</div>
            <div className="day-header">Wed</div>
            <div className="day-header">Thu</div>
            <div className="day-header">Fri</div>
            <div className="day-header">Sat</div>
            <div className="day-header">Sun</div>
            <div className="day empty"></div>
            <div className="day empty"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day event blue">New Year's Day</div>
            <div className="day event red">Special Non-Working Day</div>
            <div className="day event green">Classes Resume</div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day event green">Application for Scholarship Discount Deadline</div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day event yellow">Start of WICAT Online Reservation</div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day event green">Midterm Exam - Day 1</div>
            <div className="day event green">Midterm Exam - Day 2</div>
            <div className="day event green">Midterm Exam - Day 3</div>
            <div className="day event green">Midterm Exam - Day 4</div>
            <div className="day"></div>
            <div className="day event green">Dongseong Festival</div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day"></div>
            <div className="day empty"></div>
            <div className="day empty"></div>
            <div className="day empty"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default jan;