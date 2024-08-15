import React, { useState } from 'react';
import './style.scss';
import ExpandArrow from '../../assets/arrow_expand.svg';

const Collapse = ({ heading, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
        <div>
          {isExpanded ? <div className="collapse__content">{content}</div> : ''}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
