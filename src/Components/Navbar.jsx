import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
/* color and style of bar will change, need to figure somehting out and also see how the rest of the page will look */
  background-color: #4c7995;
  padding: 3px;
  nav {
    display: flex;
    min-height: 8vh;
    align-items: center;
  }
  .link {
    text-decoration: none;
    color: #ffffffbb;
    margin-right: 20px;
    letter-spacing: 2px;
    font-weight: bold;
  }
  .link:hover {
    color: #fff
  }
  .homeNav {
  display: flex;
  color: #ffffffbb;
  text-decoration: none;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: bold;
} 
.homeNav:hover {
    color: #fff
  }
  .linkNav {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  @media screen and (max-width:600px) {
    /* need to finish this when I find out how to use icon and also have all components on screen */
  }
`

const Navbar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='' className='link' onClick={props.handleLogout}>LOG OUT</Link>
      <span className='welcome'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login' className='link'>LOG IN</Link>
      
      <Link to='/signup' className='link'>SIGN UP</Link>
    </div>;
    
  
  return (
    <NavbarContainer>
    <nav>
      <div className='homeNav'>
        <Link to='/' className='homeNav'>HOME</Link>
      </div>

      <div className='linkNav'>
        {nav}
      </div>
    </nav>
    </NavbarContainer>
  );
};

export default Navbar;