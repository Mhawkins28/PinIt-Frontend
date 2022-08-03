import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMapPin } from 'react-icons/fa'
import './Navbar.css';


  // const [navbar, setNavbar] = useState(false);


// const changeBackground = () => {
//   if (window.scrollY >=80) {
//     setNavbar(true)
//   } else { 
//     setNavbar(false)
//   }
// }
// window.addEventListener('scroll', changeBackground)
 {/* MH: Need to delete the changeBackground details if we do not use */}
 const Navbar=(props) => {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
          PIN<FaMapPin class='pinIcon'/>T
          </Link>

        <ul className='nav-menu'>

        <li className="nav-item">
          {props.user ? (
            <div>
              <span className="welcome">WELCOME, {props.user.username} </span>
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
          {props.user ? (
            <div>
              <Link to={`/user/${props.user._id}`} className="link">
                My Pins
              </Link>
            </div>
          ) : (
            <div>
            </div>
          )}
        </li>

        <li className="nav-item">
          <Link to="/newpin" className="link">
            ADD NEW PIN
          </Link>
        </li>

        <li className="nav-item">
            {props.user ? (
            <div>
              <Link to="" className="link" onClick={props.handleLogout}>
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
}


export default Navbar;
