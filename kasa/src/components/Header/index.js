import React from 'react';
import kasaLogo from '../../assets/LOGO_color.svg';
import './style.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-content">
      <div className="header">
        <img src={kasaLogo} className="kasa_logo" />
        <ul className="header_links">
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about">
            <li>A propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
