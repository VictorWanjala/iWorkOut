import React from 'react'
import WorkoutImage from '../assets/workout.jpg'
import '../styles/Home.css'


function Home() {
  return (
    <div className='home'>
        <div className='leftImageContainer'>
         <img src={WorkoutImage}/>
        </div>
        <div className='rightTextContainer'>
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
        </div>
    </div>
  )
}

export default Home