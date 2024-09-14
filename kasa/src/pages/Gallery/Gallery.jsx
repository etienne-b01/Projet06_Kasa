import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HousingData from '../../data/logements.json';
import './style.scss';
import Rating from '../../components/Rating';
import Slideshow from '../../components/Slideshow';
import Collapse from '../../components/Collapse';

const Gallery = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const housingIdData = HousingData.find(item => item.id === id);

  // If no housing data is found for the given ID, navigate to 404 and prevent rendering
  useEffect(() => {
    if (!housingIdData) {
      navigate('/404');
    }
  }, [housingIdData, navigate]);

  if (!housingIdData) {
    return null; // Prevent further rendering
  }

  // Extracting data to be used for populating the page
  const {
    rating,
    equipments,
    tags,
    title,
    location,
    host,
    description,
    pictures,
  } = housingIdData;

  const equipmentList = (equipments || []).map(equipment => (
    <li key={equipment}>{equipment}</li>
  ));

  const tagList = (tags || []).map(tag => <li key={tag}>{tag}</li>);

  return (
    <div className="gallery__page">
      <Slideshow className="gallery__slideshow" pictures={pictures} />

      <div className="card__description">
        <div className="card__left-half">
          <div>
            <h1>{title}</h1>
          </div>
          <div>
            <p>{location}</p>
          </div>
          <div className="gallery">
            <ul className="gallery__tags">{tagList}</ul>
          </div>
        </div>
        <div className="card__right-half">
          <div className="owner-details">
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name} />
          </div>
          <div className="owner-details-rating">
            <Rating rating={rating} />
          </div>
        </div>
      </div>

      <div className="gallery__collapse">
        <div className="half">
          <Collapse heading="Description" content={description} />
        </div>
        <div className="half">
          <Collapse heading="Équipements" content={equipmentList} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
