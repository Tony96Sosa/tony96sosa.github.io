import React from 'react';
import Animacion from '../Animaciones/Animacion';

const Home = ({ name, profession, profile }) => (
  <section className="home-section section">
    <div className="effect-wrap">
      <Animacion effectN={'effect-1'}/>
      <Animacion effectN={'effect-2'} divsN={28}/>
      <Animacion effectN={'effect-3'}/>
      <Animacion effectN={'effect-4'}/>
      <Animacion effectN={'effect-5'} divsN={10}/>
    </div>
    <div className="container">
      <div className="row full-screen align-items-center">
        <div className="home-text">
          <p>Hola</p>
          <h2>Soy {name}</h2>
          <h1>{profession}</h1>
          <a href="/" className="btn-1 outer-shadow hover-in-shadow" rel="noreferrer" >Mas Sobre Mí</a>
        </div>
        <div className="home-img">
          <div className="img-box inner-shadow">
            <img src={profile} className="outer-shadow" alt="profile-pic" />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Home;