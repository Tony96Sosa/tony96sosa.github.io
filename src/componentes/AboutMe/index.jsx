import React from 'react';
import SocialLinks from './SocialLinks';

const AboutMe = ({ profile }) => {
  return (
    <section className="about-section section">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="info-principal">Sobre Mí</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box inner-shadow">
              <img src={profile} className="outer-shadow" alt="profile-pic" />
            </div>
              <SocialLinks />
          </div>
          <div className="about-info">
            <p><span>Hola! Mi nombre es Anthony Sosa. Soy un Front-end Developer React.js Jr.</span></p>
            <p>Constantemente estoy aprendiendo nuevas tecnologías.</p>
            <p>Enfocado en el performance, la arquitectura y las buenas prácticas para obtener el mejor producto posible.</p>
            <a href="/" className="btn-1 outer-shadow hover-in-shadow" rel="noreferrer" >Descargar CV</a>
            {/* <a href="#" target="_blank" className="btn-1 outer-shadow hover-in-shadow" rel="noreferrer">Contratarme</a> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;