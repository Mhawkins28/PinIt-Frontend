import React from "react";
import "./Welcome.css";
import Video from "../../assets/city-vid.mp4";

const setGeoLoc = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    sessionStorage.setItem("lat", JSON.stringify(position.coords.latitude));
    sessionStorage.setItem("lng", JSON.stringify(position.coords.longitude));
  });
};

function WelcomeContent() {
  setGeoLoc();
  return (
    <div className="video-container">
      <video src={Video} loop autoPlay muted />
      <div className="main">
        <h2>Get off the beaten Path </h2>
        <h1>Find Adventure</h1>
        <p>
        Discover hidden gems, wherever you are. A perfect way to explore different cities in a new way using maps to mark and upload your favorite "off the grid" places to share with others!{" "}
        </p>

        <div className="buttons">
          {/* <button className="btn1">
            <a href="/login" onClick={setGeoLoc()}>
              LOGIN
            </a>
          </button> */}
          
            <a href="/login" onClick={setGeoLoc()}>
          <button className="btn1">
              LOGIN
          </button>
            </a>


          {/* <button className="btn2">
            <a href="/signup" onClick={setGeoLoc()}>
              SIGN-UP
            </a>
          </button> */}
            <a href="/signup" onClick={setGeoLoc()}>
          <button className="btn2">
              SIGN-UP
          </button>
            </a>
        </div>
      </div>
    </div>
  );
}

export default WelcomeContent;
