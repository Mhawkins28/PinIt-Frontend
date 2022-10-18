// import "./App.css";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import userService from "../../utils/userService";
import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import Login from "../LoginPage/LoginPage";
import NewPin from "../NewPinPage/NewPinPage";
import PinDetails from "../PinDetailsPage/PinDetailsPage";
import EditPin from "../EditPinPage/EditPinPage";
import Signup from "../SignupPage/SignupPage";
import Welcome from "../WelcomePage/WelcomePage";
// import { FaWindows } from "react-icons/fa";
// import WelcomePage from "../WelcomePage/WelcomePage";
import UserPage from "../UserPage/UserPage";
import WithNav from "../Layouts/WithNav";
import WithoutNav from "../Layouts/WithoutNav";
// import SearchMapPage from "../SearchMapPage.jsx/SearchMapPage";

function App() {
  const [user, setUser] = useState(
    JSON.parse(window.sessionStorage.getItem("user")) !== null
      ? JSON.parse(window.sessionStorage.getItem("user"))
      : null
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

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [searchBar, setSearchBar] = useState(" ");

  const [navBarSwitch, setNavBarSwitch] = useState(1);

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
    if (sessionUser) setUser(JSON.parse(window.sessionStorage.getItem("user")));
    else setUser(null);
  }, []);

  useEffect(() => {
    fetch(`https://jmmz-ga-p3places-backend.herokuapp.com/pins/home`)
      .then((res) => res.json())
      .then((data) => setAllPins(data));
  }, []);

  return (
    <>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route
            path="/login"
            element={
              <Login
                setIsLoggedIn={setIsLoggedIn}
                setUser={setUser}
                setUserLogin={setUserLogin}
                userLogin={userLogin}
                handleSignupOrLogin={handleSignupOrLogin}
              />
            }
          />
        </Route>
        <Route element={<WithoutNav />}>
          <Route
            path="/"
            element={
              <Welcome user={user} setUser={setUser} setAllPins={setAllPins} />
            }
          />
        </Route>
        <Route element={<WithoutNav />}>
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
        </Route>

        <Route
          element={
            <WithNav
              navBarSwitch={navBarSwitch}
              setNavBarSwitch={setNavBarSwitch}
              setAllPins={setAllPins}
              searchBar={searchBar}
              setSearchBar={setSearchBar}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              user={user}
              setUser={setUser}
              handleLogout={handleLogout}
              userLogin={userLogin}
              setUserLogin={setUserLogin}
            />
          }
        >
          <Route
            path="/home"
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
                searchBar={searchBar}
                setSearchBar={setSearchBar}
              />
            }
          />
        </Route>
        <Route
          element={
            <WithNav
              navBarSwitch={navBarSwitch}
              setNavBarSwitch={setNavBarSwitch}
              setAllPins={setAllPins}
              searchBar={searchBar}
              setSearchBar={setSearchBar}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              user={user}
              setUser={setUser}
              handleLogout={handleLogout}
              userLogin={userLogin}
              setUserLogin={setUserLogin}
            />
          }
        >
          <Route
            path="/newpin"
            element={<NewPin latLng={latLng} user={user} />}
          />
        </Route>

        <Route
          element={
            <WithNav
              navBarSwitch={navBarSwitch}
              setNavBarSwitch={setNavBarSwitch}
              setAllPins={setAllPins}
              searchBar={searchBar}
              setSearchBar={setSearchBar}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              user={user}
              setUser={setUser}
              handleLogout={handleLogout}
              userLogin={userLogin}
              setUserLogin={setUserLogin}
            />
          }
        >
          <Route
            path="/pins/:id"
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
        </Route>

        <Route
          element={
            <WithNav
              navBarSwitch={navBarSwitch}
              setNavBarSwitch={setNavBarSwitch}
              setAllPins={setAllPins}
              searchBar={searchBar}
              setSearchBar={setSearchBar}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              user={user}
              setUser={setUser}
              handleLogout={handleLogout}
              userLogin={userLogin}
              setUserLogin={setUserLogin}
            />
          }
        >
          <Route
            path={`/pins/edit/${pinInfo._id}`}
            element={
              <EditPin
                pinInfo={pinInfo}
                setPinInfo={setPinInfo}
                latLng={latLng}
                user={user}
              />
            }
          />
        </Route>
        <Route
          element={
            <WithNav
              navBarSwitch={navBarSwitch}
              setNavBarSwitch={setNavBarSwitch}
              setAllPins={setAllPins}
              searchBar={searchBar}
              setSearchBar={setSearchBar}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              user={user}
              setUser={setUser}
              handleLogout={handleLogout}
              userLogin={userLogin}
              setUserLogin={setUserLogin}
            />
          }
        >
          <Route
            path="/user/:id"
            element={
              <UserPage
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
        </Route>
        {/* <Route
          element={
            <WithNav
              setAllPins={setAllPins}
              searchBar={searchBar}
              setSearchBar={setSearchBar}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              user={user}
              setUser={setUser}
              handleLogout={handleLogout}
              userLogin={userLogin}
              setUserLogin={setUserLogin}
            />
          }
        >
          <Route
            path="/search"
            element={
              <SearchMapPage
                allPins={allPins}
                setAllPins={setAllPins}
                user={user}
                latLng={latLng}
                setLatLng={setLatLng}
                infoLatLng={infoLatLng}
                setInfoLatLng={setInfoLatLng}
                pinInfo={pinInfo}
                setPinInfo={setPinInfo}
                setSearchBar={setSearchBar}
                searchBar={searchBar}
              />
            }
          />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
