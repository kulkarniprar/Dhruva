/*import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardOpener.css'; // Import your CSS

const CardOpener = ({ title, description, imageUrl, mangaData }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/manga-detail', { state: { manga: mangaData } });
  };

  return (
    <div className="card-opener" onClick={handleClick}>
      <img 
        src={imageUrl} 
        alt={title}
        className="card-opener-image"
      />
      <div className="card-opener-content">
        <h2 className="card-opener-title">{title}</h2>
        <p className="card-opener-description">{description}</p>
      </div>
    </div>
  );
};

export default CardOpener;*/
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardOpener.css'; // Import your CSS

const CardOpener = ({ title, description, imageUrl, mangaData }) => {
  const navigate = useNavigate(); // Use useNavigate hook

  const handleClick = () => {
    navigate('/manga-detail', { state: { manga: mangaData } }); // Pass mangaData to MangaDetail
  };

  return (
    <div className="card-opener" onClick={handleClick}>
      <img 
        src={imageUrl} // Use the image URL passed as a prop
        alt={title}
        className="card-opener-image"
      />
      <div className="card-opener-content">
        <h2 className="card-opener-title">{title}</h2>
        <p className="card-opener-description">{description}</p>
      </div>
    </div>
  );
};

export default CardOpener;


