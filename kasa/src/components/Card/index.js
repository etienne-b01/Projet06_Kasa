import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './style.scss';
import HousingData from '../../data/logements.json';
import Collapse from '../Collapse';

const Card = () => {
  console.log(HousingData);

  const housingItems = HousingData.map(item => (
    <div className="housing-list">
      <ul>
        <li key={item.id} className="housing-list__item">
          {item.title}
        </li>
      </ul>
    </div>
  ));

  return <div>{housingItems}</div>;
};

export default Card;
