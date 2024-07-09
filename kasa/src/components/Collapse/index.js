import React, { useState } from 'react';
import './style.css';
import ExpandArrow from '../../assets/arrow_expand.svg';

const Collapse = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="collapse-block">
      <div className="collapse-item">
        <div
          className="collapse-heading"
          onClick={() => setIsActive(!isActive)}
        >
          <div>{heading}</div>
          <div>
            <img
              src={ExpandArrow}
              className={`arrow-icon ${isActive ? 'rotate-down' : 'rotate-up'}`}
              alt="icon for expanding or collapsing menu"
            />
          </div>
        </div>
        {isActive && <div className="collapse-content">{content}</div>}
      </div>
    </div>
  );
};

export default Collapse;
