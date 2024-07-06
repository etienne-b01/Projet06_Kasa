import React from 'react';
import './style.css';
import HomePageBackgroundImage from '../../assets/home_page_background_image.png';
import AboutPageBackgroundImage from '../../assets/about_page_background_image.png';
import { useLocation } from 'react-router-dom';

const Banner = () => {
  const location = useLocation();
  const HomePageDisplayed = location.pathname === '/';

  return (
    <div className="container">
      {
        <img
          src={
            HomePageDisplayed
              ? HomePageBackgroundImage
              : AboutPageBackgroundImage
          }
          className="background_image"
        />
      }
      {HomePageDisplayed && (
        <h1 className="tagline">
          Chez vous,
          <br className="carriage_return" /> partout et ailleurs
        </h1>
      )}
    </div>
  );
};

export default Banner;
