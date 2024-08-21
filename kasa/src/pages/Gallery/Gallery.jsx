import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HousingData from '../../data/logements.json';
import './style.scss';
import Rating from '../../components/Rating';
import Slideshow from '../../components/Slideshow';

const Gallery = () => {
  const { id } = useParams();
  const housingIdData = HousingData.filter(item => item.id === id);
  const rating = housingIdData[0].rating;

  return (
    <div>
      <h1>{housingIdData[0].title}</h1>
      <img src={housingIdData[0].cover} alt={housingIdData[0].title} />
      <p>{housingIdData[0].description}</p>
      <p>The rating is {housingIdData[0].rating}</p>
      {<Rating rating={rating} />}
      <Slideshow />
    </div>
  );
};

export default Gallery;
