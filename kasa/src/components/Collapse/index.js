import React, { useState } from 'react';
import './style.css';

const Collapse = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="collapse-item">
      <div className="collapse-heading" onClick={() => setIsActive(!isActive)}>
        <div>{heading}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;
