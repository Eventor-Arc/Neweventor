import React from "react";
import Dropdown from "../components/dropdown";

import "../styles/ongoing.css";

const Upcoming = () => {
    return (
        <div className="home-container">
            <Dropdown />
            <div className="home-content">
                <h1>Upcoming</h1>
                <p>This is your main content.</p>

            </div>
        </div>
    );
};

export default Upcoming;
