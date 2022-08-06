import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import userService from "../../utils/userService";
import { Outlet } from "react-router";

const WithNav = ({
  isLoggedIn,
  setIsLoggedIn,
  user,
  setUser,
  userLogin,
  setUserLogin,
  handleLogout,
  searchBar,
  setSearchBar,
}) => {
  return (
    <>
      <Navbar
        searchBar={searchBar}
        setSearchBar={setSearchBar}
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
