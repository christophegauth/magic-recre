import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'

const Footer = () => {
  return (
    <section>
      <div>
        <img src={logo} alt='' width="80px"/>
      </div>
      <div className='navs'>
        <div className='nav'>
          <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/galerie'><li>Galerie</li></NavLink>
            <NavLink to='/actions'><li>Our Actions</li></NavLink>
          </ul>
          <div className='btns'>
            <button onClick={()=> navigate('/contact')} className='btn'>Contact</button>
          </div>
        </div>
        <div>
          <p>hellomagicrecre.agency</p>
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default Footer