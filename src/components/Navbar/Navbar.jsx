import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    if (Mobile) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [Mobile]);

  const getMobileLinksClass = () => {
    switch(location.pathname) {
      case '/':
        return 'mobile-links-home';
      case '/about':
        return 'mobile-links-about';
      case '/galerie':
        return 'mobile-links-galerie';
      case '/actions':
        return 'mobile-links-actions';
      default:
        return '';
    }
  };

  const getLngClass = () => {
    switch(location.pathname) {
      case '/':
        return 'lng-home';
      case '/about':
        return 'lng-about';
      case '/galerie':
        return 'lng-galerie';
      case '/actions':
        return 'lng-actions';
      default:
        return '';
    }
  };

  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' width="80px"/>
      <ul 
        className={`${Mobile ? "nav-links-mobile show" : "nav-links"} ${getMobileLinksClass()}`} 
        onClick={() => setMobile(false)}
      >
        <NavLink to='/'><li>Accueil</li></NavLink>
        <NavLink to='/about'><li>A propos</li></NavLink>
        <NavLink to='/galerie'><li>Galerie</li></NavLink>
        <NavLink to='/actions'><li>Nos actions</li></NavLink>
        <span></span>
        <div>
          <button className={`lng ${getLngClass()}`}>en</button>
          <button className={`lng ${getLngClass()}`}>fr</button>
        </div>
      </ul>
      <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;