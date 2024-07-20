import React from 'react';
import Card from '../../components/Card';
import Banner from '../../components/Banner';
import './style.scss';

const Home = () => {
  return (
    <div className="home-page-style">
      <Banner />
      <Card />
    </div>
  );
};

export default Home;
