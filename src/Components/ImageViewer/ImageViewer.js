/*import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ImageViewer.css'; // Import the CSS file for styling

const ImageViewer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { images } = location.state || { images: [] };

    const handleClose = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="image-viewer">
            <div className="image-container">
                {images.map((path, index) => (
                    <div key={index} className="image-page">
                        <img
                            src={path}
                            alt={`Slide ${index}`}
                            className="image"
                        />
                    </div>
                ))}
            </div>
            <button className="close-button" onClick={handleClose}>
                Close
            </button>
        </div>
    );
};

export default ImageViewer;*/

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ImageViewer.css'; // Import the CSS file for styling

const ImageViewer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { images = [] } = location.state || {}; // Default to an empty array if images are not provided

    const handleClose = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="image-viewer">
            <div className="image-container">
                {images.length > 0 ? (
                    images.map((path, index) => (
                        <div key={index} className="image-page">
                            <img
                                src={path}
                                alt={`Slide ${index}`}
                                className="image"
                            />
                        </div>
                    ))
                ) : (
                    <p>No images available</p> // Handle case where no images are provided
                )}
            </div>
            <button className="close-button" onClick={handleClose}>
                Close
            </button>
        </div>
    );
};

export default ImageViewer;

