import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' width="80px"/>
      <ul className={Mobile ? "nav-links-mobile show" : "nav-links"} onClick={() => setMobile(false)}>
        <NavLink to='/'><li>Accueil</li></NavLink>
        <NavLink to='/about'><li>A propos</li></NavLink>
        <NavLink to='/galerie'><li>Galerie</li></NavLink>
        <NavLink to='/actions'><li>Nos actions</li></NavLink>
        <NavLink to='/contact'><li>Contacts</li></NavLink>
        <span></span>
        <div>
          <button className='lng'>en</button>
          <button className='lng'>fr</button>
        </div>
      </ul>
      <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
        {Mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
