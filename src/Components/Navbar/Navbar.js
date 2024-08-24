import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div>
        
        <div className='Bar'>
        {/*<a class="active" href="#home">Home</a>*/}

        {/*<a href="/Blogs">Blog</a>
        <a href="/IndianAstro">Indian Astrophysics</a>
        <a href="/Journal">Journal</a>
        <a href="/About">About</a>*/}
        <li>
        <Link to="/">Home</Link>
        <Link to="/Blogs">Blogs</Link>
        <Link to="/IndianAstro">Indian Astrophysics</Link>
        <Link to="/Journal">Journal</Link>
        <Link to="/About">About</Link>
        <Link to="">Team</Link>
      
        </li>

        </div>
      
    </div>
    </>
  )
}

export default Navbar
