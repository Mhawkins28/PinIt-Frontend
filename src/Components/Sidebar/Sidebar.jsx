import React from "react";
import { slide as Menu } from "react-burger-menu";
import { FaMapMarkerAlt, FaGlobeAmericas } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SidebarContainer = styled.nav`
  .bm-item {
    display: inline-block;
    text-decoration: none;
    outline: none;
    top: 0;
    margin-bottom: 10px;
    color: #9d7c60;
    transition: color 0.2s;
    height: 60px;
    font-family: "Libre Franklin", sans-serif;
    font-weight: 400;
  }

  .bm-item:hover {
    color: #a09f9f;
    font-weight: 520;
    cursor: pointer;
  }

  .menu-header {
    color: #ffffff;
  }

  .menu-header:hover {
    color: White;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  .bm-burger-button {
    position: fixed;
    width: 30px;
    height: 24px;
    left: 18px;
    top: 17.5px;
  }

  .bm-burger-bars {
    background: #142236;
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
    margin-right: 45px
  }

  .bm-cross {
    background: #bdc3c7;
  }

  .bm-menu {
    background: #17263c;
    padding: 2.5em 1.5em 0;
    font-size: 1.25em;
    width: 260px
  }

  .bm-morph-shape {
    fill: #373a47;
  }

  .bm-item-list {
    color: #b8b7ad;
    font-size: 16px
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const Sidebar = ({ allPins, setPinInfo }) => {
  return (
    <SidebarContainer>
      <Menu noOverlay onStateChange={toggleMenu}>
        <div className="menu-header">PIN LOCATIONS</div>
        {allPins
          .sort((a, b) => a.Owner?.username.localeCompare(b.Owner?.username))
          .map((pin, i) => {
            return (
              <Link
                onClick={() => {
                  setPinInfo(pin);
                }}
                key={i}
                className="menu-item"
                to={`/pins/${pin._id}`}
              >
                <FaMapMarkerAlt /> {pin.name} : {pin.Owner?.username}
              </Link>
            );
          })}
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;
