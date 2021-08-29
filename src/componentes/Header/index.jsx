import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row justify-content-between">
          <div className="logo">
            <a href="index.html">T</a>
          </div>
          <div className="hamburguer-btn outer-shadow hover-in-shadow">
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;