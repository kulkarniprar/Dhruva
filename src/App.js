import React from 'react'
import {Routes,Route} from 'react-router-dom';

import Home from './Components/Home/Home'
//import Admin from './Components/Admin/Admin'
//import Signup from './Components/Signup/Signup'
import Blogs from './Components/Blogs/Blogs'
import IndianAstro from './Components/IndianAstro/IndianAstro'
import Journal from './Components/Journal/Journal'
import About from './Components/About/About'
import Explore from './Components/Explore/Explore';
//import Header from './Components/Header/Header';
//import Navbar from './Components/Navbar/Navbar';
import ImageViewer from './Components/ImageViewer/ImageViewer';
import MangaDetail from './Components/MangaDetail/MangaDetail';
import ImageGallery from './Components/ImageGallery/ImageGallery';


const App = () => {
  return (
    <>
    
    

    <Routes>
      {/*<Route path="/" element={<Home />} />
      <Route path="/Blogs" element={<Blogs />} />
      <Route path="/IndianAstro" element={<IndianAstro />} />
      <Route path="/Journal" element={<Journal />} />
      <Route path="/About" element={<About />} />*/}
   
      <Route path="/" Component={Home}/>
      <Route path="/Blogs" Component={Blogs}/>
      <Route path="/IndianAstro" Component={IndianAstro}/>
      <Route path="/Journal" Component={Journal}/>
      <Route path="/About" Component={About}/>
      <Route path="/Explore" Component={Explore}/>
      <Route path="/image-viewer" Component={ImageViewer} />
      <Route path="/manga-detail" Component={MangaDetail} />
      <Route path="/image-gallery" Component={ImageGallery} />
      
      

    

  </Routes>
  
  </>

  
      
      
    
    
  )
}

export default App

