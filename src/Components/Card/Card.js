import React from 'react';
import './Card.css'; // Import the CSS file for styling

const Card = ({ image, title, description }) => {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <div className="card-content">
                <div className="card-title">{title}</div>
                <div className="card-description">{description}</div>
            </div>
            <div className="arrow"></div>
        </div>
    );
};

export default Card;
