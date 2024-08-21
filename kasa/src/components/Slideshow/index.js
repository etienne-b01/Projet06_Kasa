import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import './style.scss';
import ControlButton from './ControlButton';
import HousingData from '../../data/logements.json';

const Slideshow = () => {
  //test auto scroll below
  /* useEffect(()=>{
    const interval = setInterval(()=>{
        nextSlide();        
    }, 3000);
    return () => clearInterval(interval);
}); */

  const { id } = useParams();
  const housingIdData = HousingData.filter(item => item.id === id);
  const photoSet = housingIdData[0].pictures;
  const [slideIndex, setSlideIndex] = useState(1);
  console.log(photoSet);

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

  const moveDot = index => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {photoSet.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
          >
            <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} />
          </div>
        );
      })}
      <ControlButton changeSlide={nextSlide} direction={'next'} />
      <ControlButton changeSlide={previousSlide} direction={'prev'} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
