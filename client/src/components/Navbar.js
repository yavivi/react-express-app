import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './css/navBar.css';
import { FcGlobe } from "react-icons/fc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (

    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Til<FcGlobe />k
            <i className='fas fa-typo3' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>

          <FontAwesomeIcon icon="play" size="1x" color="white"/>
          {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
           */}
           {/* <FontAwesomeIcon icon="bars" /> */}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>

            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
              </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/guides/listGuides'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Guides
              </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Countries'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Country
              </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/SignUp'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sign Up
              </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Login'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Login
              </Link>
          </li>


          {/* <li className='nav-item'>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
        </ul>
        {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
      </div>
    </nav>

  );
}

export default Navbar;