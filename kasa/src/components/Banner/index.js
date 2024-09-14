import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.scss';

const Banner = () => {
  const location = useLocation();
  const HomePageDisplayed = location.pathname === '/';

  return (
    <div>
      <div
        className={
          HomePageDisplayed ? 'container home-page' : 'container about-page'
        }
      >
        <h1 className="container__tagline">
          <span>Chez vous,</span> <span>partout et ailleurs</span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
