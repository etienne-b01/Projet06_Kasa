import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import { AboutPageSections } from '../data/CollapseData';

const About = () => {
  return (
    <div>
      <Banner />
      <div>
        <h1>Collapse test</h1>
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
