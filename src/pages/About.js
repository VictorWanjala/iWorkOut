import React from 'react'
import '../styles/About.css'
import workout from"../assets/workout.jpg"

function About() {
  return (
    <div className='about'>
        <div className='aboutTop'>
            <img src={workout}/>
        </div>
        <div className='aboutBottom'>
            <h3>ABOUT US</h3>
            <p>Welcome to iWorkOut, your go-to destination for fitness and well-being. 
                Our passion for health and fitness drives us to provide you with an exceptional fitness experience that goes beyond the ordinary.</p>

            <h3>OUR MISSION</h3>
            <p>At iWorkOut, our mission is simple: to empower individuals to lead healthier and happier lives. 
                We believe that a strong and healthy body is the foundation for a successful and fulfilling life. 
                Our gym is not just a place to work out; it's a community of like-minded individuals committed to their fitness journey.</p>

            <h4>Join Us Today</h4>
            <p>Your fitness journey begins at iWorkOut. Whether you're looking to lose weight, gain strength, 
                or simply maintain a healthy lifestyle, we are here to assist you. Join us today and embark on a path to a healthier, 
                happier you. Remember, the first step towards your fitness goals is the most important one. We're here to help you take it.</p>
        </div>

    </div>
  )
}

export default About