import React from "react";
import styled from "styled-components";

const WelcomeContainer = styled.nav`
  background-image: radial-gradient(
      at center,
      rgba(96, 150, 226, 0.271) 0%,
      rgba(72, 125, 199, 0.271) 100%
    ),
    url("city.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(0.15rem);
  /* yes, I know I need to fix everything, just trust the process. lol */


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
    color: rgb(228, 228, 228);
    font-weight: normal;
    letter-spacing: 3px;
    margin-top: 0;
    margin-bottom: 0;
  }

  .main h2 {
    font-size: 28px;
    color: rgb(241, 238, 238);
    font-weight: 300;
    letter-spacing: 4px;
    margin-bottom: 5px;
  }

  .main p {
    font-size: 16px;
    color: rgb(173, 166, 166);
    margin-top: 10px;
    margin-bottom: 40px;
  }

  .btn1 {
    border: white solid 1px;
    background-color: transparent;
    padding: 10px 50px;
    margin: 0 10px;
  }

  .btn1 a {
    text-decoration: none;
    color: rgba(240, 255, 247, 0.991);
  }

  .btn2 {
    border: white solid 1px;
    background-color: white;
    padding: 10px 50px;
    margin: 0 10px;
  }

  .btn2 a {
    text-decoration: none;
    color: rgb(19, 15, 12);
  }
`;

const Welcome = () => {
  return (
    <WelcomeContainer>

      <div class="main">
        <h2>Get off the beaten Path </h2>
        <h1>Insert App Name Here</h1>
        <p>Find the hidden gems, wherever you are. This App is the perfect way to explore different cities in a new way </p>

        <div class="buttons">
          <button class="btn1"><a href="/login">LOGIN</a></button>
          <button class="btn2"><a href="/signup">SIGN-UP</a></button>
        </div>
      </div>
    </WelcomeContainer>
  );
};

export default Welcome;
