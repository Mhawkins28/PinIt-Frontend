import React, { useState, useEffect } from "react";
import UserMap from "../../Components/Map/UserMap";
import '../../Pages/Home/Home.css'
import styled from 'styled-components'



const UserPage = ({
  latLng,
  setLatLng,
  infoLatLng,
  setInfoLatLng,
  setAllPins,
  allPins,
  pinInfo,
  setPinInfo,
  user,
}) => {
  const [userPins, setUserPins] = useState();

  useEffect(() => {
    fetch(`https://jmmz-ga-p3places-backend.herokuapp.com/pins/userpage/${user._id}`)
      .then((res) => res.json())
      .then((data) => setUserPins(data));
  }, []);

  return (
    <> 
    <div className="outerContainer">
      <div className="userHeader">
        <h1>{pinInfo.Owner?.username.toUpperCase()}'S PINS:</h1>
      </div>
      <div className="map">
        <UserMap
        latLng={latLng}
        setLatLng={setLatLng}
        infoLatLng={infoLatLng}
        setInfoLatLng={setInfoLatLng}
        allPins={allPins}
        setAllPins={setAllPins}
        pinInfo={pinInfo}
        setPinInfo={setPinInfo}
        user={user}
        userPins={userPins}
        setUserPins={setUserPins}
        />
      </div>
    </div>
  </> 
  );
}; 

export default UserPage;
