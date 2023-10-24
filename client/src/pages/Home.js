import React from 'react'
import WorkoutImage from '../assets/workout.jpg'
import mpesaLogo from '../assets/mpesalogo.png'
import '../styles/Home.css'
import {FaTwitter} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';



function Home() {
  return (
    <div className='home'>
        <div className='leftImageContainer'>
         <img src={WorkoutImage}/>
        </div>
        <div className='rightTextContainer'>
          <h3 style={{color: '#FB5958'}}>Welcome to iWorkOut!</h3>
            <h3>Classes</h3>
                <p>Yoga</p>
                <p>Weights</p>
                <p>Insanity</p>
                <br /><br />
            
            <h3>Subscriptions</h3>
                <p>Daily - Ksh 100</p>
                <p>Weekly - Ksh 500</p>
                <p>Monthly - Ksh 2500</p>
                <br /><br />
            
            <h3>Contacts</h3>
                 <p>Phone: 254700794573</p>
                 <p>Email: wanjala94vic@gmail.com</p>
                 <br /><br />
              

            <h3>Payment Details</h3>
            <div className='payment-options'>
              <img src={mpesaLogo} className='mpesaLogo'/>
              <p>Paybill number: 123456</p>
            </div>
            <br /><br />

                 <div className='socialMedia'>
                      <FaTwitter/> <FaFacebookF/> <FaInstagram/> <FaLinkedin/>
                </div>
        </div>
    </div>
  )
}

export default Home