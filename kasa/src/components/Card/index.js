import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './style.css';
import AccomodationData from '../../data/logements.json';
import Collapse from '../Collapse';

const Card = () => {
  console.log(AccomodationData);
  return (
    <div>
      <h1>Test vignettes toto</h1>
      <ul>
        {AccomodationData.map((id, title) => (
          <li key={`${id}`}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
