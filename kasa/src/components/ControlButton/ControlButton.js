import React from 'react';
import ScrollLeftArrow from '../../assets/arrow_scroll_left.png';
import ScrollRightArrow from '../../assets/arrow_scroll_right.png';

export default function ControlButton({ direction, changeSlide }) {
  return (
    <button
      onClick={() => {
        changeSlide();
      }}
      className={
        direction === 'next' ? 'control_button next' : 'control_button previous'
      }
    >
      <img src={direction === 'next' ? ScrollRightArrow : ScrollLeftArrow} />
    </button>
  );
}
