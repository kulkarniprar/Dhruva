/*import React from 'react';
import { useLocation } from 'react-router-dom';
import MangaCard from '../MangaCard/MangaCard.js';
import './MangaDetail.css'; // Import the CSS for styling

const MangaDetail = () => {
  const location = useLocation();
  const { manga } = location.state || {};

  if (!manga) {
    return <div>No manga data available</div>;
  }

  const { title, overview, author, imageUrl, chapters } = manga;

  return (
    <div className="manga-detail">
      <div className='manga-intro'>
        <div className="manga-image">
          <img 
            src={imageUrl} // Use the image URL from the manga data
            alt={`Cover of ${title}`}
            className="manga-image-img"
          />
        </div>
        <div className='Detail'>
          <p>OverView: {overview}</p>
          <p>Author: {author}</p>
        </div>
      </div>
      <div className="manga-info">
        <h1 className="manga-title">{title}</h1>
        <div className="manga-chapters">
          {chapters.map((chapter, index) => (
            <MangaCard 
              key={index}
              title={chapter.title}
              description={chapter.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MangaDetail;*/
import React from 'react';
import { useLocation } from 'react-router-dom';
import MangaCard from '../MangaCard/MangaCard.js';
import './MangaDetail.css'; // Import the CSS for styling

const MangaDetail = () => {
  const location = useLocation();
  const { manga } = location.state || {};

  if (!manga) {
    return <div>No manga data available</div>;
  }

  const { title, overview, author, imageUrl, chapters } = manga;

  return (
    <div className="manga-detail">
      <div className='manga-intro'>
        <div className="manga-image">
          <img 
            src={imageUrl} // Use the image URL from the manga data
            alt={`Cover of ${title}`}
            className="manga-image-img"
          />
        </div>
        <div className='Detail'>
          <p className='blog-title'>{title}</p>
          <p className='overview'>Overview: {overview}</p>
          <p>Authors: {author}</p>
        </div>
      </div>
      <div className="manga-info">
        <h1 className="manga-title">{title}</h1>
        <div className="manga-chapters">
          {chapters.map((chapter, index) => (
            <MangaCard 
              key={index}
              title={chapter.title}
              description={chapter.description}
              images={chapter.images} // Pass chapter images to MangaCard
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MangaDetail;

