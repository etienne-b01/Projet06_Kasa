import React from 'react';
import './style.scss';
import backgroundImage from '../../assets/background_image.png';

const Frame = () => {
  return (
    <div>
      <img src={backgroundImage} />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Frame;
