/*import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ImageGallery.css'; // Import the CSS file for styling

const ImageGallery = ({ cardsData = [] }) => {
    const navigate = useNavigate();

    // Handler to navigate to the ImageViewer
    const handleCardClick = (viewerImages) => {
        navigate('/image-viewer', { state: { images: viewerImages } });
    };

    return (
        <div className="image-gallery">
            <div className="card-container">
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        className="card"
                        onClick={() => handleCardClick(card.viewerImages)}
                    >
                        <img src={card.image} alt={card.title} />
                        <div className="card-content">
                            <div className="card-title">{card.title}</div>
                            <div className="card-description">{card.description}</div>
                        </div>
                        <div className="arrow"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;*/
import React from 'react';
import { useLocation } from 'react-router-dom';
import './ImageGallery.css'; // Import the CSS file for styling

const ImageGallery = () => {
  const location = useLocation();
  const { images } = location.state || { images: [] }; // Get images from state

  return (
    <div className="image-gallery">
      <div className="card-container">
        {images.map((image, index) => (
          <div key={index} className="card">
            <img src={image} alt={`Slide ${index}`} className="card-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

