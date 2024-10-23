import React from 'react'
import program_1 from '../assets/cfao.jpg'
import program_2 from '../assets/huawei.jpg'
import program_3 from '../assets/cvo.jpg'
import program_4 from '../assets/monopoly.jpg'
import program_5 from '../assets/events2.jpg'
import logo1 from '../assets/logo1.jpg'
import logo2 from '../assets/logo2.jpg'
import logo3 from '../assets/logo3.jpg'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'
import logo7 from '../assets/logo7.jpeg'
import {  useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate();
  
  return (
    <div>
      <header className='hero'>
        <h1>Nous <span>créons</span> des <span>connexions</span> pour une <span>harmonie</span> pérenne !</h1>
      </header>
      <section className='introduction'>
        <p>MAGIC RÉCRÉ est un produit de l'agence COLIBRI AGENCY qui prends en compte le
          volet évènementiel.<br/>
          Nous croyons que le plaisir et le travail d'équipe vont de pair. 
          Nos activités de team building sont conçues pour renforcer les liens entre 
          les individus, que ce soit dans un cadre professionnel, scolaire ou familial.
          Rejoignez-nous pour des moments mémorables !
        </p>
      </section>
      <section className='first_galerie'>
        <div className='item item1'>  
          <img src={program_1} alt='' />
          <div className='caption'>
            <p>Graduation Degree</p>
          </div>
        </div>
        <div className='item item2'>  
          <img src={program_2} alt='' />
          <div className='caption'>
            <p>Graduation Degree</p>
          </div>
        </div>
        <div className='item item3'>  
          <img src={program_3} alt='' />
          <div className='caption'>
            <p>Graduation Degree</p>
          </div>
        </div>
        <div className='item item4'>  
          <img src={program_4} alt='' />
          <div className='caption'>
            <p>Graduation Degree</p>
          </div>
        </div>
        <div className='item item5'>  
          <img src={program_5} alt='' />
          <div className='caption'>
            <p>Graduation Degree</p>
          </div>
        </div>
        <div className='item6'>  
          <button onClick={() => navigate('/galerie')} className='btn'>Découvrez Notre Galerie</button>
        </div>
      </section>
      <section className='mission'>
        <p>Nous contribuons au renforcement de l'estime de soi et libérons
          le meilleur en chaque individu à travers des jeux et des activités interactives.
        </p>
        <button onClick={()=> navigate('/about')} className='btn'>Découvrez Nos Services</button>
      </section>
      <section className='testiomonials'>
        <div>
          <img src={logo1} alt='' />
        </div>
        <div>
          <img src={logo2} alt='' />
        </div>
        <div>
          <img src={logo3} alt='' />
        </div>
        <div>
          <img src={logo4} alt='' />
        </div>
        <div>
          <img src={logo5} alt='' />
        </div>
        <div>
          <img src={logo6} alt='' />
        </div>
        <div>
          <img src={logo7} alt='' />
        </div>
        <div>
          <img src={logo7} alt='' />
        </div>
      </section>
    </div>    
  )
}

export default Home