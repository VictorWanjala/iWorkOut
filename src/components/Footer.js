import React from 'react'
import {FaTwitter} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>

        <div className='socialMedia'>
        <FaTwitter/> <FaFacebookF/> <FaInstagram/> <FaLinkedin/>
        </div>
        
        <p>&copy; 2023 wanjalavic.dev </p>
        
    </div>
  )
}

export default Footer