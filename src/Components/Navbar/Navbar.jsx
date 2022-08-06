import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMapPin } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({
  handleLogout,
  user,
  isLoggedIn,
  setIsLoggedIn,
  searchBar,
  setSearchBar,
}) => {
  const navigate = useNavigate();
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setSearchBar((prevState) => {
  //     return {
  //       ...prevState,
  //       [name]: value,
  //     };
  //   });
  // };

  const handleChange = (event) => {
    setSearchBar(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search", { replace: true });
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="navbar-logo">
            PIN
            <FaMapPin className="pinIcon" />T
          </Link>
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

          <ul className="nav-menu">
            <li className="nav-item">
              {isLoggedIn === true || user ? (
                <div>
                  <span className="welcome">WELCOME, {user?.username} </span>
                </div>
              ) : (
                <div>
                  <Link to="/login" className="link">
                    LOG IN
                  </Link>
                </div>
              )}
            </li>

            <li className="nav-item">
              {isLoggedIn === true || user ? (
                <div>
                  <Link to={`/user/${user?._id}`} className="link">
                    MY PINS
                  </Link>
                </div>
              ) : null}
            </li>

            <li className="nav-item">
              <Link to="/newpin" className="link">
                CREATE PIN
              </Link>
            </li>

            <li className="nav-item">
              {isLoggedIn === true || user ? (
                <div>
                  <Link
                    to="/"
                    className="link"
                    onClick={
                      (handleLogout, () => sessionStorage.removeItem("user"))
                    }
                  >
                    LOG OUT
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to="/welcome" className="link">
                    ABOUT
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
