import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HousingData from '../../data/logements.json';
import './style.scss';

const Gallery = () => {
  const { id: housingId } = useParams();
  const [housingItem, setHousingItem] = useState(null);
  const displayHousingItem = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const currentHousingItem = HousingData.find(item => item.id === housingId);
    setHousingItem(currentHousingItem);
    console.log(currentHousingItem);
  }, [housingId, displayHousingItem]);

  return <div>toto</div>;
};

export default Gallery;
