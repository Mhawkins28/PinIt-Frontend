import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NewPin from "./Pages/NewPin";

function App() {


  const [user, setUser] = useState();

  // For Map Component:
  
  const [latLng, setLatLng] = useState({
    lat: '',
    lng: '',
  });
  const [infoLatLng, setInfoLatLng] = useState({
    lat: '',
    lng: '',
  });



  return (
    <Routes>
      <Route path="/" element={
      <Home 
        user={user}
        latLng={latLng}
        setLatLng={setLatLng}
        infoLatLng={infoLatLng}
        setInfoLatLng={setInfoLatLng}
        />}/>


      <Route path="/newPin" element={<NewPin latLng={latLng}/>}/>

      <Route path="/login" element={<Login setUser={setUser} />} />

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
