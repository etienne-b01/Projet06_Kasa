import React from 'react';
import './style.scss';
import BackgroundImage from '../../assets/background_image.png';

const Banner = () => {
  return (
    <div className="container">
      {<img src={BackgroundImage} className="background_image" />}
      <p></p>
      <h1 className="tagline">
        Chez vous,
        <br className="carriage_return" /> partout et ailleurs
      </h1>
    </div>
  );
};

export default Banner;
