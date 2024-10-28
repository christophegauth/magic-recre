import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <div>
      <section className='vision'>
        <p>
          Nous visons à favoriser l'inclusion sociale en créant des connexions authentiques 
          entre les personnes et en offrant des expériences mémorables.<br/> Au cœur de notre 
          engagement se trouvent des valeurs essentielles : 
        </p>
        <ul>
          <li><FaArrowRight className="arrow"/>Esprit d'équipe, où la collaboration et l'entraide sont encouragées;</li>
          <li><FaArrowRight className="arrow"/>Inclusion, pour garantir que nos activités soient accessibles à tous;</li>
          <li><FaArrowRight className="arrow"/>Divertissement, car le plaisir anime chaque aspect de notre démarche;</li>
          <li><FaArrowRight className="arrow"/>Développement personnel, convaincus que chaque interaction contribue à la croissance individuelle.</li>
        </ul>
      </section>
      <section className='services'>
        <h2>Nos Services</h2>
        <div className='service'>
          <div></div>
          <div className='s1'>
            <h4>Activités Team Building</h4>
            <p>Des activités conçues pour renforcer la collaboration et le travail d'équipe dans les institutions.</p>
          </div>
          <div></div>
          <div className='s2'>
            <h4>Recre Event</h4>
            <p>Des formules adaptées à tous les événements de détente pour tous les âges.</p>
          </div>
          <div className='s3'>
            <h4>Recre Family</h4>
            <p>Aider les familles à recréer des liens en partageant des moments de joie et de découverte.</p>
          </div>
          <div></div>
          <div className='s4'>
            <h4>Recre School</h4>
            <p>Offrir aux apprenants des activités saines pour se divertir et développer leur esprit d'équipe.</p>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  )
}

export default About