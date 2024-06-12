import React from 'react'
import "./Navbar.css"
//import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div>
        
        <div className='Bar'>
        <a class="active" href="#home">Home</a>
        <a href="https://olympics.com/en/paris-2024">Blog</a>
        <a href="#IA">Indian Astrophysics</a>
        <a href="#Journal">Journal</a>
        <a href="#About">About</a>
        {/*<li>
        <Link to="/Blog">Blog</Link>
        <Link to="/IA">Indian Astrophysics</Link>
        <Link to="/Journal">Journal</Link>
      
        </li>*/}

        </div>
      
    </div>
    </>
  )
}

export default Navbar
