import React from 'react';
import ScrollLeftArrow from '../../assets/arrow_scroll_left.svg';
import ScrollRightArrow from '../../assets/arrow_scroll_right.svg';

export default function ControlButton({ direction, changeSlide }) {
  return (
    <button
      onClick={() => {
        console.log('Button clicked:', direction);
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