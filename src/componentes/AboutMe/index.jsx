import React from 'react';
import './AboutMe.css';

const AboutMe = () => (
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
);

export default AboutMe;