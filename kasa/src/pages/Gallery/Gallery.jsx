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
      <Slideshow className="gallery__slideshow" />
      <div className="card__description">
        <div className="card__left-half">
          <div>
            <h1>{housingIdData[0].title}</h1>
          </div>
          <div>
            <p>{housingIdData[0].location}</p>
          </div>
          <div className="gallery">
            <ul className="gallery__tags">{tagList}</ul>
          </div>
        </div>
        <div className="card__right-half">
          <div className="owner-details">
            <p>{housingIdData[0].host.name}</p>
            <img src={housingIdData[0].host.picture}></img>
          </div>
          <div className="owner-details-rating">
            {<Rating rating={rating} />}
          </div>
        </div>
      </div>
      <div className="collapse">
        <div className="half">
          <Collapse
            heading={'Description'}
            content={housingIdData[0].description}
          />
        </div>
        <div className="half">
          <Collapse heading={'Équipements'} content={equipmentList} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
