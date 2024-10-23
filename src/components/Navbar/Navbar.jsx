import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import menu_icon from '../../assets/menu-icon.png'
import menu_icon_closed from '../../assets/menu-icon-closed.png'

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav>
      <img src={logo} alt='' width="80px"/>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/galerie'><li>Galerie</li></NavLink>
        <NavLink to='/actions'><li>Our Actions</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
      </ul>
      <img src={mobileMenu ? menu_icon_closed : menu_icon} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>

  )
}

export default Navbar