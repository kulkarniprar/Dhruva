import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Home.css"
//require('dotenv').config()
import bg from "./bgp.jpeg"
import ImageWithHoverText from '../Imagehover/Imagehover'
/*const handleClick = () => {
  // Open the URL in a new tab
  window.open('/Explore', '_blank');
};*/




const Home = () => {

  
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to '/explore' within the same tab
    navigate('/Explore');
  };
  
  
  return (
    <>
    <div className='Main'>
      <div className='Intro'>
       {/*<p>
        USERNAME
        {
          process.env.USERNAME
        }
        
        </p>*/}
        <div className='Logo'>
          
        <img src={bg} alt="Background Image" />

        </div>

        
        

      </div>
      <button onClick={handleClick} className='Explore'>Explore</button>
      <h1 className='Subhead'>Current Projects</h1>
      <div className='Update'>
        <div className='Blog'>
          <div className='Img1'>
          <ImageWithHoverText imageUrl="data:image/jpeg;base64,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" text="Exoplanets"/>


          </div>
          <p>Blogs</p>
        </div>
        <div className='IA'>
          <div className='Img2'>
          {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s" alt='IA'/>*/}
          <ImageWithHoverText imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s" text="Indian Calender" />
          </div>
          <p>Indian Astrophysics</p>
          </div>
        <div className='Journal'>
          <div className='Img3'>
            <ImageWithHoverText imageUrl='data:image/jpeg;base64,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' text="Approaching dark matter"/>
          </div>
          
          <p>Journal</p>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Home

