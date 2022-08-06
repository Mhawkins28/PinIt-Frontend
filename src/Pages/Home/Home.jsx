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
  searchBar,
  setSearchBar,
}) => {
  // useEffect(() => {
  //   fetch(`https://jmmz-ga-p3places-backend.herokuapp.com/pins/home`)
  //     .then((res) => res.json())
  //     .then((data) => setAllPins(data));
  // }, []);

  const handleChange = (event) => {
    setSearchBar(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate("/search", { replace: true });
  };
  return (
    <div>
      <Sidebar allPins={allPins} pinInfo={pinInfo} setPinInfo={setPinInfo} />

      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="query">Search...</label>
          <input
            type="text"
            name="query"
            id="query"
            value={searchBar}
            onChange={handleChange}
          />
        </form>
        {/* <h2>
          <br></br>
        </h2> */}
      </div>
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
            searchBar={searchBar}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
