import React from 'react';
import './style.scss';
import BackgroundImage from '../../assets/background_image.png';

const Banner = () => {
  return (
    <div>
      <img src={BackgroundImage} className="background_image" />
    </div>
  );
};

export default Banner;
