import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../components/header"; 
import "../styles/calendar2025.css"; // Import your CSS file

const generateMonths = (year) => {
  const months = [];
  const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  for (let month = 0; month < 12; month++) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay(); 
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push({ date: "", isCurrentMonth: false });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6; 

      days.push({ date: day, isCurrentMonth: true, isWeekend });
    }

    months.push({ name: monthNames[month], days });
  }

  return months;
};

const Calendar2025 = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const months = generateMonths(selectedYear);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleMonthClick = (monthName) => {
    // Navigate to a specific route based on the month clicked
    navigate(`/events/${monthName.toLowerCase()}`); // Example route
  };

  return (
    <>
      <Header />
      <div className="calendar-container">
        <h1 className="calendar-year">{selectedYear}</h1>
        
        <div className="year-selector">
          <button className="year-button">
            Year <FontAwesomeIcon icon={faCaretDown} className="year-icon" />
          </button>
        </div>

        <div className="calendar-grid">
          {months.map((month, index) => (
            <div 
              className="month-container" 
              key={index}
              onClick={() => handleMonthClick(month.name)} // Make the whole container clickable
              style={{ cursor: 'pointer' }} // Optional: cursor style
            >
              <div className="month-title">
                {month.name}
              </div>
              <div className="days-grid">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
                  <div key={idx} className="day-header">{day}</div>
                ))}
                {month.days.map((day, idx) => (
                  <div key={idx} className={`day ${day.isWeekend ? "weekend" : ""}`}>
                    {day.date}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendar2025;