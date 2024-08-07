import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HousingData from '../../data/logements.json';
import './style.scss';

const Gallery = () => {
  const { id } = useParams();
  const housingIdData = HousingData.filter(item => item.id === id);

  console.log(housingIdData);

  return (
    <div>
      <h1>{housingIdData[0].title}</h1>
      <img src={housingIdData[0].cover} alt={housingIdData[0].title} />
      <p>{housingIdData[0].description}</p>
    </div>
  );
};

export default Gallery;
