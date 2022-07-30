import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NewPin from "./Pages/NewPin";
import PinDetails from "./Pages/PinDetails";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faMagnifyingGlass);

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

  return (
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
        element={<PinDetails pinInfo={pinInfo} />}
      />
      {/* <Route
          path="/"
          element={
            <Home coffees={coffees} deleteRefresh={deleteRefresh} user={user} />
          }
        />
        <Route
          path="/new-coffee"
          element={<NewCoffee addCoffee={addToCoffee} />}
        />
        <Route
          path="/coffee/edit/:id"
          element={<CoffeeEdit setCoffees={setCoffees} />}
        />
        <Route path="/coffee/:id" element={<CoffeeView coffees={coffees} />} />
        <Route path="/login" element={<Login setUser={setUser} />} /> */}
    </Routes>
  );
}

export default App;
