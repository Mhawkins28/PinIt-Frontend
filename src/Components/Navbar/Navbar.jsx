import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  /* color and style of bar will change, need to figure somehting out and also see how the rest of the page will look */

  nav {
    width: 100%;
    display: flex;
    min-height: 8vh;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;
    font-family: "Unica One", cursive;
    /* font will change, basically a placeholder */
  }

  .navLink {
    display: flex;
    color: #080202ba;
    text-decoration: none;
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: bold;
  }

  .link {
    text-decoration: none;
    list-style: none;
    color: #080202ba;
    margin-right: 20px;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 20px;
  }
  .link:hover {
    color: #000000;
  }

  .navLink:hover {
    color: #000000;
  }

  .welcome {
    color: #555ed7b8;
    text-transform: capitalize;
  }

  @media screen and (max-width: 600px) {
    /* need to finish this when I find out how to use icon and also have all components on screen */
  }
`;

const Navbar = (props) => {
  return (
    <NavbarContainer>
      <nav>
        <div className="navLink">
          {props.user ? (
            <Link to="" className="link" onClick={props.handleLogout}>
              LOG OUT
            </Link>
          ) : (
            <div>
              <Link to="/welcome" className="link">
                ABOUT
              </Link>
            </div>
          )}
        </div>

        <div className="navLink">
          {props.user ? (
            <div>
              <span className="welcome">WELCOME, {props.user.username} </span>
              <Link to={`/user/${props.user._id}`} className="link">
                My Pins
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/login" className="link">
                LOG IN
              </Link>

              <Link to="/signup" className="link">
                SIGN UP
              </Link>
            </div>
          )}
        </div>

        <div className="navLink">
          <Link to="/newpin" className="link">
            ADD NEW PIN
          </Link>
        </div>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
