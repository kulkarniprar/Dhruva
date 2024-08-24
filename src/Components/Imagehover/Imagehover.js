import React, { useState } from 'react';
import './Imagehover.css'; // Optional: Import CSS for styling

const ImageWithHoverText = ({ imageUrl, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="image-container"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
      <img src={imageUrl} alt="Description of the image" className="image" />
      {isHovered && <div className="overlay">{text}</div>}
    </div>
  );
};

export default ImageWithHoverText;
