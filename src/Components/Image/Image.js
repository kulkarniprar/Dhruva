import React, { useState } from 'react';

const Image = () => {
    // State to store the URL of the image
    const [imageUrl, setImageUrl] = useState('');

    // Function to load the image
    const loadImage = () => {
        // Set the URL of the image
        setImageUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s"); // Update with your image path
    };

    return (
        <div style={{ textAlign: 'center' }}>
            {/* Button to load the image */}
            <button onClick={loadImage} style={{ marginBottom: '10px' }}>
                Load Image
            </button>

            {/* Conditionally render the image */}
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt="Loaded"
                    style={{ maxWidth: '100%', height: 'auto', border: '1px solid #ccc' ,scroll:'hidden'}}
                />
            )}
        </div>
    );
};

export default Image;
