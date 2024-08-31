import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import HousingData from '../../data/logements.json';

const Card = () => {
  const housingItems = HousingData.map(item => (
    <NavLink
      to={{
        pathname: `/gallery/${item.id}`,
      }}
      key={item.id}
      className="housing-item"
    >
      <img
        src={item.cover}
        alt={item.description}
        className="housing-item__picture"
      />
      <p>{item.title}</p>
    </NavLink>
  ));

  return <div className="housing-list">{housingItems}</div>;
};

export default Card;
