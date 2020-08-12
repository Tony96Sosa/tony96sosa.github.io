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
        title: "App lista de tareas 1",
        subtitle: "Práctica JavaScript",
        category: "javascript",
        link: "https://tony96sosa.github.io/App-Lista-de-Tareas-Javascript/",
        img: "IMG/Proyectos/app-lista-de-tareas-1.gif",
        tecnology: `HTML5, CSS3, JavaScript`,
        repo: "https://github.com/Tony96Sosa/App-Lista-de-Tareas-Javascript",
    },
    {
        id: 6,
        title: "App lista de tareas 2",
        subtitle: "Práctica JavaScript",
        category: "javascript",
        link: "https://tony96sosa.github.io/App-Lista-de-Tareas-2/",
        img: "IMG/Proyectos/app-lista-de-tareas-2.gif",
        tecnology: `HTML5, Bootstrap, JavaScript, API-LocalStorage`,
        repo: "https://github.com/Tony96Sosa/App-Lista-de-Tareas-2",
    },
    {
        id: 7,
        title: "Color Flipper",
        subtitle: "Práctica JavaScript y CSS",
        category: "javascript",
        link: "https://tony96sosa.github.io/Color-Flipper/",
        img: "IMG/Proyectos/color-flipper.gif",
        tecnology: `HTML5, JavaScript, CSS3`,
        repo: "https://github.com/Tony96Sosa/Color-Flipper",
    },
    {
        id: 8,
        title: "Counter",
        subtitle: "Práctica JavaScript y CSS",
        category: "javascript",
        link: "https://tony96sosa.github.io/Counter/",
        img: "IMG/Proyectos/counter.gif",
        tecnology: `HTML5, JavaScript, CSS3`,
        repo: "https://github.com/Tony96Sosa/Counter",
    },
    {
        id: 9,
        title: "Menu Filter",
        subtitle: "Práctica JavaScript y CSS",
        category: "javascript",
        link: "https://tony96sosa.github.io/Menu-Filter/",
        img: "IMG/Proyectos/menu-filter.gif",
        tecnology: `HTML5, JavaScript, CSS3`,
        repo: "https://github.com/Tony96Sosa/Menu-Filter",
    },
    {
        id: 10,
        title: "To Do List",
        subtitle: "Proyecto Personal",
        category: "react",
        link: "https://github.com/Tony96Sosa/Reactjs-To-Do-List",
        img: "IMG/Proyectos/to-do-list.gif",
        tecnology: `React.js, Hooks, Styled Components`,
        repo: "https://github.com/Tony96Sosa/Reactjs-To-Do-List",
    },
];

const containerPortfolio = document.querySelector(".contenedor-portafolio");
const containerBtns = document.querySelector(".btn-container");

//Load Items
window.addEventListener("DOMContentLoaded", () => {
    displayPortfolioItems(portfolio);
    displayPortfolioButtons();
})

const displayPortfolioItems = (portfolioItems) => {
    let displayPortfolio = portfolioItems.map( (item) => {
        return `<section class="proyecto">
        <header>
            <a href=${item.link} target="_blank" class="proyecto-titulo-enlace">
                <h3 class="proyecto-titulo">${item.title}</h3>
            </a>
            <h4 class="proyecto-subtitulo">${item.subtitle}</h4>
            <div>
                <a href=${item.link} target="_blank">
                    <img src=${item.img} class="proyecto-img">
                </a>
            </div>
        </header>
        <footer>
            <h4 class="proyecto-subtitulo-2">Tecnologías Usadas</h4>
            <p class="proyecto-tecnologias">${item.tecnology}</p>
            <div class="proyecto-repo-caja">
                <a href=${item.repo} target="_blank" class="proyecto-repo-enlace">
                    <img src="IMG/social/github-repo.png" alt="repo" class="proyecto-repo-enlace_icon">
                </a>
            </div>
        </footer>
    </section>`;
    });
    displayPortfolio = displayPortfolio.join('');
    containerPortfolio.innerHTML = displayPortfolio;
}

const displayPortfolioButtons = () => {
    const categories = portfolio.reduce( (values,item) => {
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },["all"]);

    let categoryBtns = categories.map( (category) => {
        return `<button class="filter-btn" 
        type="button" data-id=${category}>${category}</button>`;
    });
    categoryBtns = categoryBtns.join('');
    containerBtns.innerHTML = categoryBtns;
    const filterBtns = containerBtns.querySelectorAll(".filter-btn");
    //Filter Items
    filterBtns.forEach( (btn) => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.id;
            const portfolioCategory = portfolio.filter( (portfolioItem) => {
                if(portfolioItem.category===category){
                    return portfolioItem;
                }
            });
            if(category==="all"){
                displayPortfolioItems(portfolio);
            }else{
                displayPortfolioItems(portfolioCategory);
            }
        });
    });
};