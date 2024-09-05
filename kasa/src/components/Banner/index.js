import React from 'react';
import HomePageBackgroundImage from '../../assets/home_page_background_image.png';
import AboutPageBackgroundImage from '../../assets/about_page_background_image.png';
import { useLocation } from 'react-router-dom';
import './style.scss';

const Banner = () => {
  const location = useLocation();
  const HomePageDisplayed = location.pathname === '/';

  return (
    <div>
      <div className="container">
        {
          <img
            src={
              HomePageDisplayed
                ? HomePageBackgroundImage
                : AboutPageBackgroundImage
            }
            className="container__image"
          />
        }
        {HomePageDisplayed && (
          <h1 className="container__tagline">Chez vous, partout et ailleurs</h1>
        )}
      </div>
    </div>
  );
};

export default Banner;
