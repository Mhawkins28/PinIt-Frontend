import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NewPin from "./Pages/NewPin";
import PinDetails from "./Pages/PinDetails";
import EditPin from "./Pages/EditPin";
import Navbar from "./Components/Navbar";
function App() {
  const [user, setUser] = useState();

  // For Map Component:

  const [latLng, setLatLng] = useState({
    lat: "",
    lng: "",
  });
  const [infoLatLng, setInfoLatLng] = useState({
    lat: "",
    lng: "",
  });

  const [allPins, setAllPins] = useState([{}]);

  const [pinInfo, setPinInfo] = useState({
    _id: "",
    name: "",
    address: "",
    city: "",
    lat: null,
    lng: null,
  });

  const updatePinState = (id) => {
    setAllPins(allPins.filter((pin) => pin._id !== id));
  };

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              allPins={allPins}
              setAllPins={setAllPins}
              user={user}
              latLng={latLng}
              setLatLng={setLatLng}
              infoLatLng={infoLatLng}
              setInfoLatLng={setInfoLatLng}
              pinInfo={pinInfo}
              setPinInfo={setPinInfo}
            />
          }
        />

        <Route path="/newPin" element={<NewPin latLng={latLng} />} />

        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path={`/pins/${pinInfo._id}`}
          element={
            <PinDetails
              pinInfo={pinInfo}
              setAllPins={setAllPins}
              setPinInfo={setPinInfo}
              updateCoffeeState={updatePinState}
            />
          }
        />

        <Route
          path="/pins/edit/:id"
          element={
            <EditPin
              pinInfo={pinInfo}
              setPinInfo={setPinInfo}
              latLng={latLng}
            />
          }
        />

        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
