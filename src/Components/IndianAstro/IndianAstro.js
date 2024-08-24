import React from 'react'
import './IndianAstro.css'

import ImageGallery from '../ImageGallery/ImageGallery';

const initialCards =  [
  {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s',
      title: 'Card 1',
      description: 'This is card 1 description.',
      viewerImages: [
          'https://img.freepik.com/premium-vector/man-working-computer-with-picture-man-working-it_1230457-5246.jpg?size=626&ext=jpg',
          'https://marketplace.canva.com/EAFrmo6hGok/1/0/900w/canva-beige-and-black-simple-elegant-blog-instagram-story-NHl05G43Mr4.jpg'
      ]
  },
  {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s',
      title: 'Card 2',
      description: 'This is card 2 description.',
      viewerImages: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s'
      ]
  },{
      image: 'https://img.freepik.com/premium-vector/man-working-computer-with-picture-man-working-it_1230457-5246.jpg?size=626&ext=jpg',
      title: 'Card 3',
      description: 'This is card 2 description.',
      viewerImages: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s'
      ]
  },
  {
      image: 'https://marketplace.canva.com/EAFrmo6hGok/1/0/900w/canva-beige-and-black-simple-elegant-blog-instagram-story-NHl05G43Mr4.jpg',
      title: 'Card 4',
      description: 'This is card 2 description.',
      viewerImages: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s'
      ]
  }
  // Add more cards as needed
];
const IndianAstro = () => {
  return (
    <>

<div>
    <ImageGallery cardsData={initialCards} />
    </div>
    <div className='Main'>
      <h1 className='text'>Unveil secrets of Indian Astrophysics</h1>
      <div className='Collage'>
      <img className='Sci' src='https://t3.ftcdn.net/jpg/04/43/88/94/360_F_443889444_IxDN8BRSaxXsPzKXZ3x5SVsC51BsVFgy.jpg' alt='Sci1'/>
      <img className='Sci' src='https://t3.ftcdn.net/jpg/04/43/88/94/360_F_443889444_IxDN8BRSaxXsPzKXZ3x5SVsC51BsVFgy.jpg' alt='Sci2'/>
        
        

      </div>
      <p className='IAintro'>Indian astrophysics has made significant strides over the years, with contributions 
        ranging from theoretical advancements to observational discoveries</p>

      <h4 className='SubIA'>Upcoming Review Papers</h4>
      <p className='A1'>Indian Calender</p>
      <p className='A2'>Computational research using Stellarium</p>
    </div>
    </>
  )
}

export default IndianAstro
