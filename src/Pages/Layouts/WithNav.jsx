import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import userService from "../../utils/userService";
import { Outlet } from "react-router";

const WithNav = ({ isLoggedIn, setIsLoggedIn }) => {
  const [user, setUser] = useState(
    JSON.parse(window.sessionStorage.getItem("user"))
  );

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  return (
    <>
      <Navbar
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        user={user}
        userLogin={userLogin}
        setUser={setUser}
      />
      <Outlet />
    </>
  );
};

export default WithNav;
