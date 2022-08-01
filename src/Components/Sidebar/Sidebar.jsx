import React, { Link } from "react";
import { stack as Menu } from "react-burger-menu";
import { FaMapMarkerAlt, FaGlobeAmericas } from 'react-icons/fa'
import styled from 'styled-components'

const SidebarContainer = styled.nav`
.bm-item {
  display: inline-block;
  text-decoration: none;
  outline: none;
  top: 0;
  margin-bottom: 10px;
  color: #5b5555;
  transition: color 0.2s;
  height: 60px;
  font-family: "Libre Franklin", sans-serif;
  font-weight: 400;
}

.bm-item:hover {
  color: #565c7a;
  font-weight: 600;
  cursor: pointer;

}

.menu-header {
  color: White
}

.menu-header:hover {
  color: White;
  font-weight: 400;
}

a {
  text-decoration: none
}

.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 30px;
  top: 30px;
}

.bm-burger-bars {
  background: #2b0d58;
}

.bm-cross-button {
  height: 24px;
  width: 24px;
}

.bm-cross {
  background: #bdc3c7;
}

.bm-menu {
  background: rgb(20, 29, 61);
  padding: 2.5em 1.5em 0;
  font-size: 1.25em;
}

.bm-morph-shape {
  fill: #373a47;
}

.bm-item-list {
  color: #b8b7ad;
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
`

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const Sidebar = ({ pinInfo }) => {
  
  return (
    <SidebarContainer>
    <Menu noOverlay onStateChange={toggleMenu}>
      <div className='menu-header'>
        PIN LOCATIONS
      </div>

      {/*{pinInfo.map((name, i) => {
        return ( */}
          <a className="menu-item" href='/'>
          <FaMapMarkerAlt /> PIN NAME

          </a>
        {/* );
      })} */}
    
  
    </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;

