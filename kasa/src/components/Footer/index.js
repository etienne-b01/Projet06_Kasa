import React from 'react';
import './style.scss';
import kasaLogoBW from '../../assets/LOGO_BW.png';

const Footer = () => {
  return (
    <div className="footer">
      <img src={kasaLogoBW} />
      <p>© 2020 Kasa. All rights reserved.</p>
    </div>
  );
};

export default Footer;
