import React from 'react'
import styled from 'styled-components'


const WelcomeContainer = styled.nav`
  background-image: radial-gradient(at center, rgba(96, 150, 226, 0.271) 0%, rgba(72, 125, 199, 0.271) 100%), url('city.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;  
  backdrop-filter: blur(.15rem); 
  /* yes, I know I need to fix everything, just trust the process. lol */

  .navbar {
    width: 100%;
    display: flex;
    min-height: 8vh;
    align-items: center;
    justify-content: space-evenly;
  }

  .homeNav {
    display: flex;
    color: #ffffffbb;
    text-decoration: none;
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: bold;
  }

  .otherNav {
    display: flex;
    justify-content: space-around;
  }

  li {
    text-decoration: none;
    list-style: none;
    color: #ffffffbb;
    margin-right: 20px;
    letter-spacing: 2px;
    font-weight: bold;
  }

  .main {
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0 auto;
  }

  .main h1 {
    font-size: 64px;
    color: rgb(208, 207, 207); 
    font-weight: normal;
    letter-spacing: 3px;
    margin-top: 0;
    margin-bottom: 0;
  }

  .main h2 {
    font-size: 28px;
    color: rgb(208, 207, 207);
    font-weight: lighter;
    letter-spacing: 4px;
    margin-bottom: 5px;
  }

  .main p {
    font-size: 16px;
    color: rgb(197, 193, 193);
    margin-top: 10px;
    margin-bottom: 40px;
  }

  .btn1 {
    border: white solid 1px;
    background-color: transparent;
    color: white;
    padding: 10px 50px;
    margin: 0 10px;
  }

  .btn2 {
    border: white solid 1px;
    background-color: white;
    color: rgb(19, 15, 12);
    padding: 10px 50px;
    margin: 0 10px;
  }
`

const Welcome = () => {
  return (
  <WelcomeContainer >
    <nav class="navbar">
    <div class="homeNav"><li> HOME</li></div>
      <div class="otherNav">
        <li> LINK </li>
        <li> LINK</li>
        <li> LINK</li>
      </div>
    </nav>

    <div class="main">
      <h2>Discover Your City </h2>
      <h1>Find New Adventures</h1>
      <p>blah blah blah, some phrase here, blah blah blah blah blah blah</p>
    
      <div class="buttons">
        <button class="btn1">LOGIN</button>
        <button class="btn2">SIGN-UP</button>
      </div>
    </div>
  </WelcomeContainer>
  )
}

export default Welcome