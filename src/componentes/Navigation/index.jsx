import React from 'react';

const menu = ['home','about','services','portfolio','testimonial','constact'];
const Navigation = ({name}) => (
  <nav className="nav-menu">
    <div className="close-nav-menu outer-shadow hover-in-shadow">&times;</div>
    <div className="nav-menu-inner">
      <ul>
        {menu.map( (item, i) => {
          if(i===0){
            return <li key={i} ><a href="/" className="inner-shadow active" rel="noreferrer" >{item}</a></li>
          }else{
            return <li key={i} ><a href="/" className="outer-shadow hover-in-shadow" rel="noreferrer" >{item}</a></li>
          }
        })}
      </ul>
    </div>
    <p className="copyright-text">&copy; 2020 {name}</p>
  </nav>
)

export default Navigation;
