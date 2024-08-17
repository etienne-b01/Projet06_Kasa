import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import ExpandArrow from '../../assets/arrow_expand.svg';

const Collapse = ({ heading, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef();

  return (
    <div className="collapse">
      <div className="collapse__item">
        <div className="collapse__heading">
          <div>{heading}</div>
          <div>
            <img
              src={ExpandArrow}
              onClick={() => setIsExpanded(!isExpanded)}
              className={
                isExpanded ? 'arrow-icon rotate-down' : 'arrow-icon rotate-up'
              }
            />
          </div>
        </div>
        <div
          className="collapse__content--container"
          ref={containerRef}
          style={
            isExpanded
              ? { height: containerRef.current.scrollHeight + 'px' }
              : { height: '0px' }
          }
        >
          <div className="collapse__content">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
