import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NewPinForm from "./Components/NewPinForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newPin" element={<NewPinForm />} />

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
