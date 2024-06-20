import React from 'react';
import { Link } from 'react-router-dom';
import kasaLogo from '../assets/LOGO_color.svg';

const Banner = () => {
  return (
    <div>
      <img src={kasaLogo} />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </div>
  );
};

export default Banner;
