import React from 'react';
import './Header.css';

const social = [
	{
		social_link: "https://www.linkedin.com/in/kurt-anthony-sosa-448b0315b/",
		img: "IMG/social/linkedin.png",
		alt: "linkedin",
		class: "head-social-media-icon",
	},
	{
		social_link: "https://github.com/Tony96Sosa",
		img: "IMG/social/github-repo.png",
		alt: "github",
		class: "head-social-media-icon",
	},
	{
		social_link: "https://twitter.com/tony96sosa",
		img: "IMG/social/twitter.png",
		alt: "twitter",
		class: "head-social-media-icon",
	},
];

const Header = ({ name, profession }) => (
	<header className="header" id="inicio">
		<div className="contenedor head">
			<h1 className="head-titulo">{name}</h1>
			<p className="head-puesto">{profession}</p>
			<div className="head-social-media">
				{
					social.map(item => 
						<a key={item.social_link} 
							href={item.social_link} 
							className={item.class} 
							target="_blank" 
							rel="noreferrer" >
							<img src={item.img} alt={item.alt} />
						</a>
					)
				}
			</div>
		</div>
	</header>
);

export default Header;