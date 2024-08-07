import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HousingData from '../../data/logements.json';
import './style.scss';
import filledRatingStar from '../../assets/rating_star_filled.png';
import emptyRatingStar from '../../assets/rating_star_empty.png';

const Gallery = () => {
  const { id } = useParams();
  const housingIdData = HousingData.filter(item => item.id === id);

  const generateRatingStars = () => {
    const starCount = parseInt(housingIdData[0].rating, 10);
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(<img key={i} src={filledRatingStar} alt="rating point" />);
    }
    for (let i = 0; i < 5 - starCount; i++) {
      stars.push(
        <img key={i} src={emptyRatingStar} alt="empty rating point" />
      );
    }
    return stars;
  };

  return (
    <div>
      <h1>{housingIdData[0].title}</h1>
      <img src={housingIdData[0].cover} alt={housingIdData[0].title} />
      <p>{housingIdData[0].description}</p>
      <p>The rating is {housingIdData[0].rating}</p>
      <div>{generateRatingStars(housingIdData[0].rating)}</div>
    </div>
  );
};

export default Gallery;
