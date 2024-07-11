import React from 'react';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import { AboutPageSections } from '../../data/CollapseData';
import './style.css';

const About = () => {
  return (
    <div className="about-style">
      <Banner />
      <div>
        <div>
          {AboutPageSections.map(({ heading, content }) => (
            <Collapse heading={heading} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
