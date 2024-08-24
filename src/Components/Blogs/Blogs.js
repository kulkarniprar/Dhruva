import React from 'react'
import './Blogs.css';

//import Card from '../Card/Card';
import ImageGallery from '../ImageGallery/ImageGallery';
//import MangaDetail from '../MangaDetail/MangaDetail';
import CardOpener from '../CardOpener/CardOpener';
import page1 from "./Content/Page1.png"; 
import page2 from "./Content/Page2.png"; 
import page3 from "./Content/Page3.png";
import page4 from "./Content/Page4.png";
import page5 from "./Content/Page5.png"; 
import page6 from "./Content/Page6.png";
import page7 from "./Content/Page7.png";
import page8 from "./Content/Page8.png";
import page9 from "./Content/Page9.png";
import page10 from "./Content/Page10.png";
import page11 from "./Content/Page11.png";
import page12 from "./Content/Page12.png";
import page13 from "./Content/Page13.png";


//import Image from '../Image/Image';
//import ImageViewer from '../../ImageViewer/ImageViewer';
const initialCards = [
  {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjNHi24fSm5AkBnqbg7eUFzxpSP_Ok7sjqA&s',
      title: 'History of Space Exploration',
      description: 'This is card 1 description.',
      viewerImages: [
          'https://img.freepik.com/premium-vector/man-working-computer-with-picture-man-working-it_1230457-5246.jpg?size=626&ext=jpg',
          'https://marketplace.canva.com/EAFrmo6hGok/1/0/900w/canva-beige-and-black-simple-elegant-blog-instagram-story-NHl05G43Mr4.jpg'
      ]
  },
  {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuCpL_8D7quIgCTW-m5425gF8LCcvfjFg8g&s',
      title: 'Exoplanets: Chasing the Aliens',
      description: 'This is card 2 description.',
      viewerImages: [
          'https://img.freepik.com/free-vector/frontend-development-online-service-platform-website-interface-design-improvement-web-page-programming-coding-testing-online-text-editor-isolated-flat-vector-illustration_613284-3263.jpg?size=626&ext=jpg',
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
          'https://img.freepik.com/premium-vector/man-working-computer-with-picture-man-working-it_1230457-5246.jpg?size=626&ext=jpg',
          'https://learnenglishteens.britishcouncil.org/sites/teens/files/b1_writing_a_blog.jpg'
      ]
  }
  // Add more cards as needed
];

/*const mangaData = [
  {
    title: 'Manga Title 1',
    description: 'History of Space Exploration',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjNHi24fSm5AkBnqbg7eUFzxpSP_Ok7sjqA&s',
    overview: 'Overview of Manga Title 1',
    author: 'Author 1',
    chapters: [
      { title: 'Chapter 1', description: 'Chapter 1 description' },
      { title: 'Chapter 2', description: 'Chapter 2 description' }
    ]
  },
  {
    title: 'Manga Title 2',
    description: 'Description of Manga Title 2',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1pEo-qDffAAjYGy4mKY4LJSUItCwwEmtxg&s',
    overview: 'Overview of Manga Title 2',
    author: 'Author 2',
    chapters: [
      { title: 'Chapter 1', description: 'Chapter 1 description' },
      { title: 'Chapter 2', description: 'Chapter 2 description' }
    ]
  },
  // Add more manga data as needed
];*/



const mData = [
  {
    title: "History of Space Exploration",
    description: "History of Space Exploration",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjNHi24fSm5AkBnqbg7eUFzxpSP_Ok7sjqA&s",
    viewerImages: [
      
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s',
          'https://img.freepik.com/premium-vector/man-working-computer-with-picture-man-working-it_1230457-5246.jpg?size=626&ext=jpg',
          'https://learnenglishteens.britishcouncil.org/sites/teens/files/b1_writing_a_blog.jpg'
    ],
    overview: "Countdown…T minus…3…2…1 and you are now in for a trip down the memory lane that will make you admire the efforts and brilliance that has gone into the space exploration missions. The world and our understanding of it would’ve been much different had mankind not started to explore the universe. This thought must have occurred to you at some point in time,”How did it all begin??!!”.Amidst the war stricken world that was divided by different and conflicting beliefs, dawned the new face of the world. This blog tries to chronicle the most fascinating episodes of space exploration and presents a timeline of our tryst with the mighty universe!",
    author: "Prarthana and Atharva",
    chapters: [
      { 
        title: "Chapter 1", 
        description: "Cruising into the unexplored(1940-60)",
        images: [
          page1,
         page2,page3
        ]
      },
      { 
        title: "Chapter 2", 
        description: "Tryst with Moon(1960-1970)",
        images: [
         page4,page5
        ]
      },
      { 
        title: "Chapter 3", 
        description: "Understanding our neighbours better(1970-90)",
        images: [
          page6,page7,page8
        ]
      },
      { 
        title: "Chapter 4", 
        description: "A harbour to sail in the stellar winds(1990-2000)",
        images: [
          page9,page10
        ]
      },
      { 
        title: "Chapter 5", 
        description: "Current Affairs (2000-2024)",
        images: [
          page11,page12,page13
        ]
      }


    ]
  },
  {
    title: "Exoplanets: Chasing the Aliens",
    description: "Exoplanets: Chasing the Aliens",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1pEo-qDffAAjYGy4mKY4LJSUItCwwEmtxg&s",
    viewerImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s',
          'https://img.freepik.com/premium-vector/man-working-computer-with-picture-man-working-it_1230457-5246.jpg?size=626&ext=jpg',
          'https://learnenglishteens.britishcouncil.org/sites/teens/files/b1_writing_a_blog.jpg'
    ],
    overview: "Exploring the world beyond ours",
    author: "Khushi and Pratiksha",
    chapters: [
      { 
        title: "Chapter 1", 
        description: "Cruising into the unexplored(1940-60)",
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s',
          'https://img.freepik.com/premium-vector/man-working-computer-with-picture-man-working-it_1230457-5246.jpg?size=626&ext=jpg',
          'https://learnenglishteens.britishcouncil.org/sites/teens/files/b1_writing_a_blog.jpg',
          'https://marketplace.canva.com/EAFqeW_vK7Y/1/0/900w/canva-cream-and-beige-clean-minimalist-instagram-story-6KS555pvIWA.jpg'
        ]
      },
      { 
        title: "Chapter 2", 
        description: "Tryst with Moon(1960-1970)",
        images: [
          
          'https://img.freepik.com/free-vector/frontend-development-online-service-platform-website-interface-design-improvement-web-page-programming-coding-testing-online-text-editor-isolated-flat-vector-illustration_613284-3263.jpg?size=626&ext=jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s'
        ]
      },
      { 
        title: "Chapter 3", 
        description: "Understanding our neighbours better(1970-90)",
        images: [
          'https://img.freepik.com/free-vector/frontend-development-online-service-platform-website-interface-design-improvement-web-page-programming-coding-testing-online-text-editor-isolated-flat-vector-illustration_613284-3263.jpg?size=626&ext=jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s'
        ]
      }
    ]
  }
  // More manga items...
];

console.log('Imported image path:', page1);




const Blogs = () => {
  return (
    <>
   {/* <div className="container">
            <Card
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpWm_3GGJ4HeTFMP_ab5lD4JUr-Va9K_xKQ&s" // Replace with an actual image URL
                title="Astrophysics Discovery"
                description="Discover the wonders of the universe with our latest astrophysics research and findings."
            />
           
    </div>*/}
    <div>
    <ImageGallery cardsData={initialCards} />
    <div>
    <div>
     {/* <MangaDetail/>*/}
    </div>
    {/*<div>
    <div className="card-gallery">
      {mangaData.map((manga, index) => (
        <CardOpener
          key={index}
          title={manga.title}
          description={manga.description}
          imageUrl={manga.imageUrl}
          mangaData={manga} // Pass the full manga data to CardOpener
        />
      ))}
    </div>
    </div>
    <img src={page1}></img>*/}

  <div className='Main'>
      <h1 className='text'>Dive into amazing reads!!!</h1>
      <h4 className='Bintro'>A take on the Universe in our way where persepctives meet and opinions grow</h4>
      <p className='bhead'>Popular Blogs</p>
      
      
      
    </div>
    <div className="card-gallery">
      {mData.map((manga, index) => (
        <CardOpener
          key={index}
          title={manga.title}
          description={manga.description}
          imageUrl={manga.imageUrl}
          mangaData={manga} // Pass the full manga data
        />
      ))}
    </div>
      
    </div>
    </div>

    <div className='Main'>
    <p className='up'>Upcoming blogs</p>
    <p className='upb'>How is astrophysics related to Culture and Literature for Intersect, a Stanford run students' journal</p>
    </div>
   {/* <div className='Main'>
      <h1 className='text'>Dive into amazing reads!!!</h1>
      <h4 className='Bintro'>A take on the Universe in our way where persepctives meet and opinions grow</h4>
      <p className='bhead'>Popular Blogs</p>
      <p className='B1'>
        
        Exoplanets:Delve into the extraterrestrial realm</p>
      <p className='B2'>History of space exploration: Blast off into stories of space exploration</p>
      <p className='up'>Upcoming blogs</p>
      <p className='upb'>How is astrophysics related to Culture and Literature for Intersect, a Stanford run students' journal</p>
      
    </div>*/}
    </>
  )
}

export default Blogs
