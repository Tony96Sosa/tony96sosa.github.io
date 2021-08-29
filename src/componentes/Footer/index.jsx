import React from 'react';
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

const social = [
	{
		social_link: "https://www.linkedin.com/in/kurt-anthony-sosa-448b0315b/",
		class: "social-media-icon",
		classIcon: faLinkedinIn,
	},
	{
		social_link: "https://github.com/Tony96Sosa",
		class: "social-media-icon",
		classIcon: faGithub,
	},
	{
		social_link: "https://twitter.com/tony96sosa",
		class: "social-media-icon",
		classIcon: faTwitter,
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
								<i><FontAwesomeIcon icon={item.classIcon} /></i>
						</a>
					)
				}
			</div>
		</div>
	</footer>
);

export default Footer;