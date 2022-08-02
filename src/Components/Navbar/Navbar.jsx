import React, {useEffect} from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const NavbarContainer = styled.nav`
/* color and style of bar will change, need to figure somehting out and also see how the rest of the page will look */

  nav {
    width: 100%;
    display: flex;
    min-height: 8vh;
    align-items: center;
    justify-content: space-evenly;
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
    color: #000000
  }
  .homeNav {
    display: flex;
    color: #080202ba;
    text-decoration: none;
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: bold;

} 
  .homeNav:hover {
    color: #000000
  }

  @media screen and (max-width:600px) {
    /* need to finish this when I find out how to use icon and also have all components on screen */
  }
`








const Navbar = (props) => {




  

  

  



<div>
    <Link to='' className='link'>HOME</Link>
  </div>

let nav = props.user ?
<div>
      <Link to='' className='link' onClick={props.handleLogout}>LOG OUT</Link>
      <span className='welcome'>WELCOME, {props.userLogin.username}</span>
    </div>
    :
    <div>
      <Link to='/login' className='link'>LOG IN</Link>
      
      <Link to='/signup' className='link'>SIGN UP</Link>
    </div>;
    
    return (
    
    <NavbarContainer>
    <nav>
      <div className='linkNav'>
        {nav}
      </div>

    <div>
      <Link to='/' className='link'>HOME</Link>
    </div>

      <div className='homeNav'>
        <Link to='/newpin' className='homeNav'> ADD NEW PIN </Link>
      </div>

    </nav>
    </NavbarContainer>
  );
};

export default Navbar;