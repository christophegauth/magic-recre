import React from 'react'


const About = () => {
  return (
    <div>
      <section className='vision'>
        <h2>Notre Visions</h2>
        <p>
        Favoriser l'inclusion sociale en créant des connexions authentiques entre les personnes et en offrant des expériences mémorables.
        Au cœur de notre engagement se trouvent des valeurs essentielles : <br/>
        Esprit d'équipe, où la collaboration et l'entraide sont encouragées; <br/>
        Inclusion, pour garantir que nos activités soient accessibles à tous; <br/>
        Divertissement, car le plaisir anime chaque aspect de notre démarche; <br/>
        Développement personnel, convaincus que chaque interaction contribue à la croissance individuelle.
        </p>
      </section>
      <section className='services' id="nos-services">
        <h2>Nos Services</h2>
        <div className='service'>
          <div className='sv'></div>
          <div className='s1'>
            <h3>Récré Team Building</h3>
            <p>Des activités conçues pour renforcer la collaboration et le travail d'équipe dans les institutions.</p>
          </div>
          <div className='sv'></div>
          <div className='s2'>
            <h3>Récré Event</h3>
            <p>Des formules adaptées à tous les événements de détente pour tous les âges.</p>
          </div>
          <div className='s3'>
            <h3>Récré Family</h3>
            <p>Aider les familles à recréer des liens en partageant des moments de joie et de découverte.</p>
          </div>
          <div className='sv'></div>
          <div className='s4'>
            <h3>Récré School</h3>
            <p>Offrir aux apprenants des activités saines pour se divertir et développer leur esprit d'équipe.</p>
          </div>
          <div className='sv'></div>
        </div>
      </section>
    </div>
  )
}

export default About