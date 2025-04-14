import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate


const AboutUs = () => {
    const navigate = useNavigate(); // React Router navigation function

    return (
        <div className="home-container"> 
            <div className="home-content">
                <h1>About Us</h1>
                <h2>VISION</h2>
                <p>
                    Eventor envisions a future where organizing academic events is effortless and stress-free.
                    Through technology, we aim to eliminate unnecessary complications,
                    ensuring that students can focus on the success of their events rather than the difficulties of planning them.
                    Our goal is to create a platform that connects people, streamlines communication, and makes event coordination more efficient and accessible. By providing a reliable and user-friendly system, Eventor seeks to transform the way academic institutions manage their events, making planning 
                    simpler and more engaging for everyone involved.
                </p>

                <h3>MISSION</h3>
                <p>
                    Eventor simplifies event planning with an intuitive platform that eliminates manual complexities.
                    Our system streamlines scheduling, notifications, and management to enhance efficiency.
                    We prioritize user experience with a seamless and functional interface for accessible event organization.
                    Collaboration fosters smooth communication between organizers, participants, and stakeholders.
                    With time-saving automation and continuous improvements, Eventor remains a secure and reliable solution for institutions.
                </p>

                {/* Back Button */}
                <button onClick={() => navigate(-1)} className="back-button">⬅ Back</button>
            </div>
        </div>
    );
};

export default AboutUs;
