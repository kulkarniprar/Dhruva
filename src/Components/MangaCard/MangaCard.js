/*import React from 'react';
import './MangaCard.css'; // Import the CSS for styling

const MangaCard = ({ title, description }) => {
    return (
        <div className="manga-card">
            <div className="card-title">{title}</div>
            <div className="card-description">{description}</div>
        </div>
    );
};

export default MangaCard;*/
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MangaCard.css'; // Import the CSS for styling

const MangaCard = ({ title, description, images }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/image-viewer', { state: { images } }); // Pass chapter images to ImageViewer
  };

  return (
    <div className="manga-card" onClick={handleClick}>
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
    </div>
  );
};

export default MangaCard;




