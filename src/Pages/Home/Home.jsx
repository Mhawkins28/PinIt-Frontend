import React from "react";
import Map from "../../Components/Map/Map";
import { useEffect } from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";

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
      <Sidebar allPins={allPins} pinInfo={pinInfo} setPinInfo={setPinInfo} />

    <div><h2><br></br></h2></div>
 {/* I am taking a short cut for now to fix a spacing problem. I can change this with css later */}

      <div className="outerContainer">
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
    </div>
  );
};

export default Home;
