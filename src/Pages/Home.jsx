import React from "react";
import Map from "../Components/Map";

const Home = ({latLng, setLatLng, infoLatLng, setInfoLatLng}) => {
  return (
    <div>
      <Map latLng={latLng} setLatLng={setLatLng} infoLatLng={infoLatLng} setInfoLatLng={setInfoLatLng}/>
    </div>
  );
};

export default Home;
