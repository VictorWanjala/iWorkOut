import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
        <img src={Logo}/>
        <div className='hiddenLinks'>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
        </div>
        </div>
       
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/About">About Us</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
           
            
        </div>

    </div>
  )
}

export default Navbar