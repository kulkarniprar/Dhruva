import React from 'react'
import './Explore.css'
import Card from '../Card/Card'


const Explore = () => {
  return (
    <>
   
    <div className='Main'>
      <p className='T'>Latest Reads</p>
    </div>

    <div className="container">
            <Card
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s" // Replace with an actual image URL
                title="Astrophysics Discovery"
                description="Discover the wonders of the universe with our latest astrophysics research and findings."
            />
            {/* Add more Card components as needed */}
            <Card
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s" // Replace with an actual image URL
                title="Astrophysics Discovery"
                description="Discover the wonders of the universe with our latest astrophysics research and findings."
            />
            <Card
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s" // Replace with an actual image URL
                title="Astrophysics Discovery"
                description="Discover the wonders of the universe with our latest astrophysics research and findings."
            />
        </div>
    </>
  )
}

export default Explore
