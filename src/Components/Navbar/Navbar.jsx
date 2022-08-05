import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMapPin } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ handleLogout, user, isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="navbar-logo">
            PIN
            <FaMapPin class="pinIcon" />T
          </Link>

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
                    My Pins
                  </Link>
                </div>
              ) : null}
            </li>

            <li className="nav-item">
              <Link to="/newpin" className="link">
                ADD NEW PIN
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
