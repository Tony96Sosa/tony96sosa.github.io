import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => (
  <div className="social-links">
    <a href="https://github.com/Tony96Sosa" target="_blank" className="outer-shadow hover-in-shadow" rel="noreferrer" >
      <i><FontAwesomeIcon icon={faGithub} /></i>
    </a>
    <a href="https://www.linkedin.com/in/kurt-anthony-sosa-448b0315b/" target="_blank" className="outer-shadow hover-in-shadow" rel="noreferrer" >
      <i><FontAwesomeIcon icon={faLinkedinIn} /></i>
    </a>
    <a href="https://twitter.com/tony96sosa" target="_blank" className="outer-shadow hover-in-shadow" rel="noreferrer" >
      <i><FontAwesomeIcon icon={faTwitter} /></i> 
    </a>
  </div>
)
  
export default SocialLinks;