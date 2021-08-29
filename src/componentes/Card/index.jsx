import React from 'react';
import './Card.css';

const Card = ({portfolio}) => (
	portfolio.map((item, i) => (
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
	))
);

export default Card;