import React from 'react';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import { AboutPageSections } from '../../data/CollapseData';
import './style.scss';

const About = () => {
  return (
    <div className="about-style">
      <Banner />
      <div>
        <div>
          {AboutPageSections.map(({ heading, content }, index) => (
            <Collapse
              key={`${heading}-${index}`} // concatenating heading and index gives unique key
              heading={heading}
              content={content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
