import React from "react";
import Map from "../Components/Map";
import {useEffect} from 'react'

const Home = ({latLng, setLatLng, infoLatLng, setInfoLatLng, allPins, setAllPins}) => {
  
  useEffect(() => {
    fetch(`http://localhost:3001/pins`)
      .then((res) => res.json())
      .then((data) => setAllPins(data));
  }, []);
  
  return (
    <div>
      <Map latLng={latLng} setLatLng={setLatLng} infoLatLng={infoLatLng} setInfoLatLng={setInfoLatLng}
              allPins={allPins}
              setAllPins={setAllPins}
      />
    </div>
  );
};

export default Home;
