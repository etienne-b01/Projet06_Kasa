import React, { useState } from 'react';
import './style.css';
import ExpandArrow from '../../assets/arrow_expand.svg';

const Collapse = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);

  // test pour débug
  const toggleCollapse = () => {
    setIsActive(!isActive);
    console.log('Toggled collapse, isActive:', !isActive);
  };
  //fin test

  return (
    <div className="collapse-block">
      <div className="collapse-item">
        <div className="collapse-heading" onClick={toggleCollapse}>
          <div>{heading}</div>
          <div>
            <img
              src={ExpandArrow}
              className={`arrow-icon ${isActive ? 'rotate-down' : 'rotate-up'}`}
              alt="icon for expanding or collapsing menu"
            />
          </div>
        </div>
        {isActive && (
          <div className={`collapse-content ${isActive ? 'expanded' : ''}`}>
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
