import React from 'react'
import './Welcome.css'
import Video from '../../assets/city-vid.mp4'

function WelcomeContent() {
  return (
    <div className='video-container'>
      <video src={Video} loop autoPlay muted />
      <div class="main">
        <h2>Get off the beaten Path </h2>
        <h1>Find Adventure</h1>
        <p>Discover hidden gems, wherever you are. This App is the perfect way to explore different cities in a new way </p>

        <div class="buttons">
          <button class="btn1"><a href="/login">LOGIN</a></button>
          <button class="btn2"><a href="/signup">SIGN-UP</a></button>
        </div>
      </div>

    </div>
  )
}

export default WelcomeContent