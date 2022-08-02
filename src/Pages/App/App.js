// import "./App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../../utils/userService";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import Login from "../LoginPage/LoginPage";
import NewPin from "../NewPinPage/NewPinPage";
import PinDetails from "../PinDetailsPage/PinDetailsPage";
import EditPin from "../EditPinPage/EditPinPage";
import Navbar from "../../Components/Navbar/Navbar";
import Signup from "../SignupPage/SignupPage";
import Sidebar from "../../Components/Sidebar/Sidebar";
import WelcomePage from "../WelcomePage/WelcomePage";
import { FaWindows } from "react-icons/fa";

function App() {
  const [user, setUser] = useState(
    JSON.parse(window.sessionStorage.getItem("user"))
  );

  const [userSignup, setUserSignup] = useState({
    username: "",
    password: "",
    passwordConf: "",
  });

  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

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

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  };

  useEffect(() => {
    window.sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    let sessionUser = window.sessionStorage.getItem("user");
    if (sessionUser !== null)
      setUser(JSON.parse(window.sessionStorage.getItem("user")));
  }, []);

  return (
    <div>
      <Navbar
        handleLogout={handleLogout}
        user={user}
        userLogin={userLogin}
        setUser={setUser}
      />
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

        <Route
          path="/newPin"
          element={<NewPin latLng={latLng} user={user} />}
        />

        <Route
          path="/login"
          element={
            <Login
              setUser={setUser}
              setUserLogin={setUserLogin}
              userLogin={userLogin}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              setUser={setUser}
              setUserSignup={setUserSignup}
              userSignup={userSignup}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          }
        />
        <Route
          path={`/pins/${pinInfo._id}`}
          element={
            <PinDetails
              pinInfo={pinInfo}
              setAllPins={setAllPins}
              setPinInfo={setPinInfo}
              updateCoffeeState={updatePinState}
              user={user}
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

        <Route path="/welcome" element={<WelcomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
