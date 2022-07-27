import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NewPinForm from "./Components/NewPinForm";
import Login from "./Pages/Login";
import NewPin from "./Pages/NewPin";

function App() {
  const [user, setUser] = useState();

  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} />
      <Route path="/newPin" element={<NewPin />} />
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
