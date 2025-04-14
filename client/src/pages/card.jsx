import React from 'react';
import "../styles/card.css";

const Card = ({ title, description, imgSrc, onButtonClick }) => {
    return (
        <div className="card">
            {imgSrc ? (
                <img src={imgSrc} alt={title} className="card-image" />
            ) : (
                <div className="placeholder">No Image Available</div>
            )}
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <button className="card-button" onClick={onButtonClick}>
                Learn More
            </button>
        </div>
    );
};

export default Card;