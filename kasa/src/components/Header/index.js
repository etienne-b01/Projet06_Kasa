import React from 'react';
import kasaLogo from '../../assets/LOGO_color.svg';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <img src={kasaLogo} className="kasa_logo" />
        <ul className="header-links">
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
