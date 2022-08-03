import React, { useState, useEffect } from "react";
import UserMap from "../../Components/Map/UserMap";

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 41.3874,
  lng: -2.1686,
};

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
  );
};

export default UserPage;
