import React from 'react'

const About = () => {
  return (
    <div>
      <section className='vision'>
        <h2>Notre Vision</h2>
        <p>Nous visons à favoriser l'inclusion sociale, à créer des connexions authentiques
          entre les personnes et à offrir des expériences qui marquent.
        </p>
      </section>
      <section className='valeurs'>
        <h2>Nos Valeurs</h2>
        <div className='valeur valeur1'>
          <h3>Esprit d'Équipe</h3>
          <p>Nous encourageons la collaboration et l'entraide.</p>
        </div>
        <div className='valeur valeur2'>
          <h3>Inclusion</h3>
          <p>Nos activités sont accessibles à tous.</p>
        </div>
        <div className='valeur valeur3'>
          <h3>Amusement</h3>
          <p>Le plaisir est au cœur de tout ce que nous faisons.</p>
        </div>
        <div className='valeur valeur4'>
          <h3>Développement Personnel</h3>
          <p>Nous croyons en la croissance individuelle à travers l'interaction.</p>
        </div>
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