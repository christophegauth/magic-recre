import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className='footer'>
      <div className='footer1'>
        <div className='logo_footer'>
          <img src={logo} alt='' width="80px" />
        </div>
        <ul className='nav'>
          <NavLink to='/' onClick={scrollToTop}><li>Accueil</li></NavLink>
          <NavLink to='/about' onClick={scrollToTop}><li>A propos</li></NavLink>
          <NavLink to='/galerie' onClick={scrollToTop}><li>Galerie</li></NavLink>
          <NavLink to='/actions' onClick={scrollToTop}><li>Nos actions</li></NavLink>
          <NavLink to='/contact' onClick={scrollToTop}><li>Contacts</li></NavLink>
        </ul>
        <div className='social_media'>
          <div>
            <a href="https://www.facebook.com/magicrecre?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/magicrecre/profilecard/?igsh=emozcWxyN3praDBl" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
          <div>
            <a href="https://www.tiktok.com/@magicrecre?_t=8qZfYTzE64s&_r=1" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
          <div>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className='footer2'>
        <p>contact@magicrecre.com</p>
        <p>&copy; October 2024 Magic Récré, All Rights Reserved. Developed by SOKPOLY Christophe.</p>
      </div>
    </section>
  );
};

export default Footer;
