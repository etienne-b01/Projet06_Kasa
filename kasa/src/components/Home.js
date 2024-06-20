import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Card from './Card';
import backgroundImage from '../assets/background_image.png';

const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <img src={backgroundImage} />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
