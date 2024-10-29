import React, { useEffect, useState } from 'react';
import program_1 from '../assets/cfao.jpg';
import program_2 from '../assets/huawei.jpg';
import program_3 from '../assets/cvo.jpg';
import program_4 from '../assets/monopoly.jpg';
import logo1 from '../assets/logo1.jpg';
import logo2 from '../assets/logo2.jpg';
import logo3 from '../assets/logo3.jpg';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.jpeg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const phrase = "Nous créons des connexions pour une harmonie pérenne !";
  const words = phrase.split(" ");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const spans = document.querySelectorAll(".hero .word");
    spans.forEach((span, index) => {
      span.style.animationDelay = `${index * 0.3}s`;
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Exécute une fois pour vérifier la position actuelle

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div>
      <header className='hero'>
        <h1>
          {words.map((word, index) => {
            const className = (word === "créons" || word === "connexions" || word === "harmonie") ? "word highlight" : "word";
            return (
              <span key={index} className={className}>
                {word}&nbsp;
              </span>
            );
          })}
        </h1>
      </header>
      <section className='introduction'>
        <p>MAGIC RÉCRÉ est un produit de l'agence COLIBRI AGENCY qui prend en compte le volet évènementiel.<br/>
          Nous croyons que le plaisir et le travail d'équipe vont de pair. 
          Nos activités sont conçues pour renforcer les liens entre 
          les individus, que ce soit dans un cadre professionnel, scolaire ou familial.
          Rejoignez-nous pour des moments mémorables !
        </p>
      </section>
      <section className='first_galeries'>
        <div className='first_galerie'>
          <div className='item item1'>  
            <img src={program_2} alt='' />
            <div className="welcome-message">Récré Team Building</div>
          </div>
          <div className='item item2'>  
            <img src={program_1} alt='' />
            <div className="welcome-message">Récré Event</div>
          </div>
          <div className='item item3'>  
            <img src={program_3} alt='' />
            <div className="welcome-message">Récré School</div>
          </div>
          <div className='item item4'>  
            <img src={program_4} alt='' />
            <div className="welcome-message">Récré Family</div>
          </div>
        </div>

        <div className='item6'>  
          <button onClick={() => navigate('/galerie')} className='btn'>Découvrez Notre Galerie</button>
        </div>
      </section>
      <section className='mission'>
        <p>Nous contribuons au renforcement de <span>l'estime de soi</span> et <sapn> libérons</sapn>
          le meilleur en chaque individu à travers des <sapn>jeux</sapn> et des activités interactives.
        </p>
        <button onClick={() => navigate('/about')} className='btn'>Découvrez Nos Services</button>
      </section>
      <section className='testimonial'>
        <h2>Ils nous ont fait confiance</h2>
        <div className='testimonials'>
          {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo7, logo7, logo7].map((logo, index) => (
            <div key={index}>
              <img src={logo} alt='' />
            </div>
          ))}
        </div>
      </section>
    </div>    
  );
};

export default Home;
