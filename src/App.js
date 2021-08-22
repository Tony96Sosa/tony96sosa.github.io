import React from 'react';
import Header from "./componentes/Header";
import AboutMe from './componentes/AboutMe';
import Footer from './componentes/Footer';
import Card from './componentes/Card';
import data from './datos.json';

const App = () => {
  return (
    <div className="App">
      <Header 
        name="Anthony Sosa" 
        profession="Front-end Developer React.js Jr" 
      />
      <main>
        <AboutMe />
        <section className="portafolio" id="portafolio">
            <div className="contenedor">
                <h2 className="wow subtitulo">Portafolio</h2>
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
