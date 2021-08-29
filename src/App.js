import React from 'react';
import Header from "./componentes/Header";
import Navigation from './componentes/Navigation';
import Home from "./componentes/Home";
import AboutMe from './componentes/AboutMe';
import Footer from './componentes/Footer';
import Card from './componentes/Card';
import data from './datos.json';

const App = () => {
  return (
    <div>
      <Header />
      <Navigation name="Tony Sosa" />
      <Home 
        name="Tony Sosa" 
        profession="Front-end Developer React.js Jr" 
        profile="IMG/profile1.png"
      />
      <main>
        <AboutMe profile="IMG/profile2.jpg" />
        <section className="portafolio" id="portafolio">
          <div className="contenedor">
            <h2 className="subtitulo">Portafolio</h2>
            {/* Botones */}
            <div className="btn-container">
            </div>
            {/* Proyectos */}
            <div className="contenedor-portafolio">
              <Card portfolio={data} />
            </div>
          </div>
        </section>
      </main>
      <Footer 
        name="Anthony Sosa" 
        year="2020"
      />
    </div>
  );
}

export default App;
