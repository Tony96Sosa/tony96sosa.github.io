import React from 'react';
import './Footer.css';

const social = [
	{
		social_link: "https://www.linkedin.com/in/kurt-anthony-sosa-448b0315b/",
		class: "wow social-media-icon",
		classIcon: "bx bxl-linkedin",
	},
	{
		social_link: "https://github.com/Tony96Sosa",
		class: "wow social-media-icon",
		classIcon: "bx bxl-github",
	},
	{
		social_link: "https://twitter.com/tony96sosa",
		class: "wow social-media-icon",
		classIcon: "bx bxl-twitter",
	},
];

const Footer = ({ name, year }) => (
	<footer className="footer" id="contacto">
		<div className="contenedor footer-content">
			<div className="contact-us">
				<h2 className="brand">{name}</h2>
				<p>©{year}</p>
			</div>
			<div className="social-media">
				{
					social.map(item => 
						<a key={item.social_link} 
							href={item.social_link} 
							className={item.class}  
							target="_blank" 
							rel="noreferrer" >
							<i className={item.classIcon}></i>
						</a>
					)
				}
			</div>
		</div>
	</footer>
);

export default Footer;