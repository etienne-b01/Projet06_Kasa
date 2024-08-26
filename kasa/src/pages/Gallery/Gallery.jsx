import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HousingData from '../../data/logements.json';
import './style.scss';
import Rating from '../../components/Rating';
import Slideshow from '../../components/Slideshow';
import Collapse from '../../components/Collapse';

const Gallery = () => {
  const { id } = useParams();
  const housingIdData = HousingData.filter(item => item.id === id);
  const rating = housingIdData[0].rating;
  const equipmentList = (housingIdData[0].equipments || []).map(
    (equipment, index) => <li key={equipment}>{equipment}</li>
  );
  const tagList = (housingIdData[0].tags || []).map((tag, index) => (
    <li key={tag}>{tag}</li>
  ));

  return (
    <div>
      <h1>{housingIdData[0].title}</h1>
      <p>{housingIdData[0].description}</p>
      <p>{housingIdData[0].location}</p>
      <ul className="gallery__tags">{tagList}</ul>
      <p>{housingIdData[0].host.name}</p>
      <img src={housingIdData[0].host.picture}></img>
      <Collapse
        heading={'Description'}
        content={housingIdData[0].description}
      />
      <Collapse heading={'Équipements'} content={equipmentList} />
      <p>The rating is {housingIdData[0].rating}</p>
      {<Rating rating={rating} />}
      <Slideshow />
    </div>
  );
};

export default Gallery;
