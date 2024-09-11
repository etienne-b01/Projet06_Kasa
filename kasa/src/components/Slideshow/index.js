import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';
import ControlButton from '../ControlButton/ControlButton';
import HousingData from '../../data/logements.json';

const Slideshow = () => {
  const { id } = useParams();
  const housingIdData = HousingData.filter(item => item.id === id);
  const photoSet = housingIdData[0].pictures;
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== photoSet.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === photoSet.length) {
      setSlideIndex(1);
    }
  };

  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(photoSet.length);
    }
  };

  return (
    <div className="container-slider">
      {photoSet.map((url, index) => {
        const fileName = url.substring(url.lastIndexOf('/') + 1);
        //Using the filename for a key by finding the position of the last slash in the URL then extracting whatever content comes after it.
        return (
          <div
            key={fileName}
            className={
              slideIndex === index + 1 ? 'slide active-animation' : 'slide'
            }
          >
            <img src={url} alt={`Slide ${index + 1}`} />
          </div>
        );
      })}
      <ControlButton changeSlide={previousSlide} direction={'prev'} />
      <ControlButton changeSlide={nextSlide} direction={'next'} />
      <div className="counter">
        {slideIndex}/{photoSet.length}
      </div>
    </div>
  );
};

export default Slideshow;
