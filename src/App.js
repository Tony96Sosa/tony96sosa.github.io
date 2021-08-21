import React from 'react';
import Header from "./componentes/Header";

const portfolio = [
  {
      id: 1,
      title: "Diseño de Página Responsive",
      subtitle: "Proyecto Personal",
      category: "css",
      link: "https://tony96sosa.github.io/Pagina-Responsive-1/",
      img: "IMG/Proyectos/diseño-pagina-responsive.gif",
      tecnology: `HTML5, CSS3, JavaScript`,
      repo: "https://github.com/Tony96Sosa/Pagina-Responsive-1",
  },
  {
      id: 2,
      title: "Aplicación de Notas",
      subtitle: "Proyecto Personal",
      category: "node",
      link: "https://tony96sosa-app.herokuapp.com/",
      img: "IMG/Proyectos/notes-app.jpg",
      tecnology: `HTML5, CSS3, JavaScript, NodeJS, MongoDB, Express.js, Passport.js, Handlebars, Bootstrap`,
      repo: "https://github.com/Tony96Sosa/App-Notas",
  },
  {
      id: 3,
      title: "Responsive Animated Navbar",
      subtitle: "Práctica CSS",
      category: "css",
      link: "https://tony96sosa.github.io/Responsive-Animated-Navbar/",
      img: "IMG/Proyectos/navbar-responsive-1.gif",
      tecnology: `HTML5, CSS3, JavaScript`,
      repo: "https://github.com/Tony96Sosa/Responsive-Animated-Navbar",
  },
  {
      id: 4,
      title: "Animated Hamburguer Menu",
      subtitle: "Práctica CSS",
      category: "css",
      link: "https://tony96sosa.github.io/Animated-Hamburguer-Menu/",
      img: "IMG/Proyectos/animacion-hamburguesa-1.gif",
      tecnology: `HTML5, CSS3, JavaScript`,
      repo: "https://github.com/Tony96Sosa/Animated-Hamburguer-Menu",
  },
  {
      id: 5,
      title: "Color Flipper",
      subtitle: "Práctica JavaScript y CSS",
      category: "javascript",
      link: "https://tony96sosa.github.io/Color-Flipper/",
      img: "IMG/Proyectos/color-flipper.gif",
      tecnology: `HTML5, JavaScript, CSS3`,
      repo: "https://github.com/Tony96Sosa/Color-Flipper",
  },
  {
      id: 6,
      title: "Counter",
      subtitle: "Práctica JavaScript y CSS",
      category: "javascript",
      link: "https://tony96sosa.github.io/Counter/",
      img: "IMG/Proyectos/counter.gif",
      tecnology: `HTML5, JavaScript, CSS3`,
      repo: "https://github.com/Tony96Sosa/Counter",
  },
  {
      id: 7,
      title: "Menu Filter",
      subtitle: "Práctica JavaScript y CSS",
      category: "javascript",
      link: "https://tony96sosa.github.io/Menu-Filter/",
      img: "IMG/Proyectos/menu-filter.gif",
      tecnology: `HTML5, JavaScript, CSS3`,
      repo: "https://github.com/Tony96Sosa/Menu-Filter",
  },
  {
      id: 8,
      title: "Social-Media-Dashboard",
      subtitle: "Práctica React.js",
      category: "react.js",
      link: "https://tony96sosa.github.io/SocialMediaDashboard-React/",
      img: "IMG/Proyectos/socialmediadashboard-react.gif",
      tecnology: `React.js, Hooks, GitHub-Pages`,
      repo: "https://github.com/Tony96Sosa/SocialMediaDashboard-React",
  },
  {
      id: 9,
      title: "Calculadora",
      subtitle: "Práctica React.js",
      category: "react.js",
      link: "https://tony96sosa-calculadora.web.app/",
      img: "IMG/Proyectos/calculadora.gif",
      tecnology: `React.js, Hooks, Firebase(hosting)`,
      repo: "https://github.com/Tony96Sosa/CalcApp",
  },
  {
      id: 10,
      title: "To-do-list-react-1",
      subtitle: "Práctica React.js",
      category: "react.js",
      link: "https://tony96sosa.github.io/TodoList-1-React/",
      img: "IMG/Proyectos/to-do-list-react-1.gif",
      tecnology: `React.js, Hooks, GitHub-Pages`,
      repo: "https://github.com/Tony96Sosa/TodoList-1-React",
  },
  {
      id: 11,
      title: "To-do-list-react-1",
      subtitle: "Práctica React.js, CSS",
      category: "react.js",
      link: "https://login-app1.vercel.app/",
      img: "IMG/Proyectos/login-react-1.gif",
      tecnology: `React.js, Hooks, Vercel(hosting)`,
      repo: "https://github.com/Tony96Sosa/TodoList-1-React",
  },
  {
      id: 12,
      title: "Fitness-App",
      subtitle: "Práctica React.js, CSS",
      category: "react.js",
      link: "https://fitness-app-cards.vercel.app/",
      img: "IMG/Proyectos/fitness-app.gif",
      tecnology: `React.js, Hooks, Vercel(hosting)`,
      repo: "https://github.com/Tony96Sosa/FitnessApp-cards",
  },
  {
      id: 13,
      title: "DogBot",
      subtitle: "Práctica React.js, CSS",
      category: "react.js",
      link: "https://dog-bot-iota.vercel.app/",
      img: "IMG/Proyectos/dogbot.gif",
      tecnology: `React.js, Hooks, Vercel(hosting)`,
      repo: "https://github.com/Tony96Sosa/DogBot",
  },
  {
      id: 14,
      title: "App lista de tareas 1",
      subtitle: "Práctica JavaScript",
      category: "javascript",
      link: "https://tony96sosa.github.io/App-Lista-de-Tareas-Javascript/",
      img: "IMG/Proyectos/app-lista-de-tareas-1.gif",
      tecnology: `HTML5, CSS3, JavaScript`,
      repo: "https://github.com/Tony96Sosa/App-Lista-de-Tareas-Javascript",
  },
  {
      id: 15,
      title: "App lista de tareas 2",
      subtitle: "Práctica JavaScript",
      category: "javascript",
      link: "https://tony96sosa.github.io/App-Lista-de-Tareas-2/",
      img: "IMG/Proyectos/app-lista-de-tareas-2.gif",
      tecnology: `HTML5, Bootstrap, JavaScript, API-LocalStorage`,
      repo: "https://github.com/Tony96Sosa/App-Lista-de-Tareas-2",
  },
];

// const displayPortfolioButtons = () => {
//   const categories = portfolio.reduce( (values,item) => {
//       if(!values.includes(item.category)){
//           values.push(item.category);
//       }
//       return values;
//   },["all"]);

//   let categoryBtns = categories.map( (category) => {
//       return `<button class="wow filter-btn" 
//       type="button" data-id=${category}>${category}</button>`;
//   });
//   categoryBtns = categoryBtns.join('');
//   containerBtns.innerHTML = categoryBtns;
//   const filterBtns = containerBtns.querySelectorAll(".filter-btn");
//   //Filter Items
//   filterBtns.forEach( (btn) => {
//       btn.addEventListener('click', (e) => {
//           const category = e.currentTarget.dataset.id;
//           const portfolioCategory = portfolio.filter( (portfolioItem) => {
//               if(portfolioItem.category===category){
//                   return portfolioItem;
//               }
//           });
//           if(category==="all"){
//               displayPortfolioItems(portfolio);
//           }else{
//               displayPortfolioItems(portfolioCategory);
//           }
//       });
//   });
// };

const App = () => {
  return (
    <div className="App">
      <Header 
        name="Anthony Sosa" 
        profession="Front-end Developer React.js Jr" 
      />
      <main>
        <section className="sobre-mi" id="sobre-mi">
            <div className="contenedor">
                <h2 className="wow subtitulo">Sobre Mí</h2>
                <div className="contenedor-sobremi">
                    <div className="contenedor-sobremi-info">
                        <p className="wow text-sobremi">Hola, soy Tony!👨‍💻</p>
                        <p className="wow text-sobremi">Soy un Front-end Developer que trabaja con React.js.</p>
                        <p className="wow text-sobremi">Constantemente estoy aprendiendo nuevas tecnologías.📚</p>
                        <p className="wow text-sobremi">enfocado en el performance, la arquitectura y las buenas prácticas para obtener el mejor producto posible.💻</p>
                        {/* <div className="sobremi-cv-caja">
                            <a href="" target="_blank" className="wow sobremi-cv-enlace">
                                Curriculum Vitae
                            </a>
                        </div> */}
                    </div>
                    <img src="IMG/profile1.jpg" className="wow contenedor-sobremi_img" alt="profilephoto" />
                </div>
            </div>
        </section>
        <section className="portafolio" id="portafolio">
            <div className="contenedor">
                <h2 className="wow subtitulo">Portafolio</h2>
                {/* Botones */}
                <div className="btn-container">
                </div>
                {/* Proyectos */}
                <div className="contenedor-portafolio">
                  {
                    portfolio.map((item, i) => (
                      <>
                        <section key={i} className="wow proyecto">
                          <header>
                            <a href={item.link} target="_blank" className="proyecto-titulo-enlace" rel="noreferrer">
                              <h3 className="proyecto-titulo">{item.title}</h3>
                            </a>
                            <h4 className="proyecto-subtitulo">{item.subtitle}</h4>
                            <div>
                              <a href={item.link} target="_blank" rel="noreferrer">
                                <img src={item.img} className="proyecto-img" alt={item.img} />
                              </a>
                            </div>
                          </header>
                          <footer>
                            <h4 className="proyecto-subtitulo-2">Tecnologías Usadas</h4>
                            <p className="proyecto-tecnologias">{item.tecnology}</p>
                            <div className="proyecto-repo-caja">
                                <a href={item.repo} target="_blank" className="proyecto-repo-enlace" rel="noreferrer">
                                    <img src="IMG/social/github-repo.png" alt="repo" className="proyecto-repo-enlace_icon" />
                                </a>
                            </div>
                          </footer>
                        </section>
                      </>))
                  }
                  
                </div>
            </div>
        </section>
      </main>
      <footer className="footer" id="contacto">
        <div className="contenedor footer-content">
            <div className="contact-us">
                <h2 className="brand">Anthony Sosa</h2>
                <p>©2020</p>
            </div>
            <div className="social-media">
                <a href="https://www.linkedin.com/in/kurt-anthony-sosa-448b0315b/" target="_blank" className="wow social-media-icon" rel="noreferrer" >
                    <i className='bx bxl-linkedin'></i>
                </a>
                <a href="https://github.com/Tony96Sosa" target="_blank" className="wow social-media-icon" rel="noreferrer" >
                    <i className='bx bxl-github'></i>
                </a>
                <a href="https://twitter.com/tony96sosa" target="_blank" className="wow social-media-icon" rel="noreferrer" >
                    <i className='bx bxl-twitter'></i>
                </a>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
