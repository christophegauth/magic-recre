import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter, FaArrowUp } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

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
          <img src={logo} alt='Magic Récré logo' width="175px" />
        </div>
        <ul className='nav'>
          <NavLink to='/' onClick={scrollToTop}><li>Accueil</li></NavLink>
          <NavLink to='/about' onClick={scrollToTop}><li>A propos</li></NavLink>
          <NavLink to='/galerie' onClick={scrollToTop}><li>Galerie</li></NavLink>
          <NavLink to='/actions' onClick={scrollToTop}><li>Nos actions</li></NavLink>
        </ul>
        <div className='some_links'>
          <div className='social_links'>
            <h3>Suivez-nous sur</h3>
            <div className='social_media'>
              <a href="https://www.facebook.com/magicrecre?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/magicrecre/profilecard/?igsh=emozcWxyN3praDBl" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@magicrecre?_t=8qZfYTzE64s&_r=1" target="_blank" rel="noopener noreferrer">
                <FaTiktok />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
            </div>
          </div>
          <div className='contact'>
            <h3>Contactez-nous</h3>
            <div><IoCall /> +229 64725756 / 62907645</div>
            <div><MdEmail />contact@magicrecre.com</div>
          </div>
        </div>
      </div>
      <div className='footer2'>
        <p> &copy; October 2024 Magic Récré, All Rights Reserved. Developed by SOKPOLY Christophe.</p>
        <button onClick={scrollToTop} className='btn-top'>
          <FaArrowUp className="icon" />
        </button>
      </div>
    </section>
  );
};

export default Footer;
