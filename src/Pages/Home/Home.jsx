import React from "react";
import Map from "../../Components/Map/Map";
import { useEffect } from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";

const Home = ({
  latLng,
  setLatLng,
  infoLatLng,
  setInfoLatLng,
  allPins,
  setAllPins,
  pinInfo,
  setPinInfo,
}) => {
  useEffect(() => {
    fetch(`http://localhost:3001/pins`)
      .then((res) => res.json())
      .then((data) => setAllPins(data));
  }, []);

  return (
    <div>
      <Sidebar pageWrapId={"page-wrap"} />
      <div className="map">
        <Map
          latLng={latLng}
          setLatLng={setLatLng}
          infoLatLng={infoLatLng}
          setInfoLatLng={setInfoLatLng}
          allPins={allPins}
          setAllPins={setAllPins}
          pinInfo={pinInfo}
          setPinInfo={setPinInfo}
        />
      </div>
    </div>
  );
};

export default Home;
