import React, { useState, useEffect } from "react";
import UserMap from "../../Components/Map/UserMap";
import '../../Pages/Home/Home.css'

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
    fetch(`http://localhost:3001/pins/userpage/${user._id}`)
      .then((res) => res.json())
      .then((data) => setUserPins(data));
  }, []);

  return (
    <> 
    <div className="userHeader">
      <h2>{pinInfo.Owner?.username.toUpperCase()}'S PINS:</h2>
    </div>
    <div className="outerContainer">
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
