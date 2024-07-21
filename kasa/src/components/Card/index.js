import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, NavLink } from 'react-router-dom';
import './style.scss';
import HousingData from '../../data/logements.json';
import Collapse from '../Collapse';

const Card = () => {
  const housingItems = HousingData.map(item => (
    <NavLink
      to={{
        pathname: `/gallery/${item.id}`,
      }}
      key={item.id}
      className="housing-item"
    >
      <p>{item.title}</p>
      <img
        src={item.pictures[0]}
        alt={item.description}
        className="housing-item__picture"
      />
    </NavLink>
  ));

  return <div className="housing-list">{housingItems}</div>;
};

export default Card;
