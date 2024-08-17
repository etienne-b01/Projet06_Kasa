import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import ExpandArrow from '../../assets/arrow_expand.svg';

const Collapse = ({ heading, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // code for calculating div height
  useEffect(() => {
    const contentElement = document.querySelector('.collapse__content');
    if (isExpanded) {
      contentElement.style.height = `${contentElement.offsetHeight}px`;
    } else {
      contentElement.style.height = '0px';
    }
  }, [isExpanded]);

  return (
    <div className="collapse">
      <div className="collapse__item">
        <div className="collapse__heading">
          <div>{heading}</div>
          <div>
            <img
              src={ExpandArrow}
              onClick={() => {
                if (isExpanded === false) {
                  setIsExpanded(true);
                } else {
                  setIsExpanded(false);
                }
              }}
              className={
                isExpanded ? 'arrow-icon rotate-down' : 'arrow-icon rotate-up'
              }
            />
          </div>
        </div>
        <div className={`collapse__content ${isExpanded ? 'expanded' : ''}`}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
