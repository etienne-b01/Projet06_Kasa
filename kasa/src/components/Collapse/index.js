import React, { useState } from 'react';
import './style.css';
import CollapseArrow from '../../assets/arrow_collapse.svg';
import ExpandArrow from '../../assets/arrow_expand.svg';

const Collapse = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="collapse-item">
      <div className="collapse-heading" onClick={() => setIsActive(!isActive)}>
        <div>{heading}</div>
        <div>
          <img
            src={isActive ? ExpandArrow : CollapseArrow}
            className="arrrow_image"
          />
        </div>
      </div>
      {isActive && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;
