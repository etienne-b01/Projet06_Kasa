import React from 'react';
import filledRatingStar from '../../assets/rating_star_filled.png';
import emptyRatingStar from '../../assets/rating_star_empty.png';
import './style.css';

function Rating({ rating }) {
  const starCount = parseInt(rating, 10);
  const stars = [];
  for (let i = 0; i < starCount; i++) {
    stars.push(
      <img
        key={`filled-${i}`}
        src={filledRatingStar}
        alt="rating point"
        className="rating-star"
      />
    );
  }
  for (let i = 0; i < 5 - starCount; i++) {
    stars.push(
      <img
        key={`empty-${i}`}
        src={emptyRatingStar}
        alt="empty rating point"
        className="rating-star"
      />
    );
  }
  return stars;
}

export default Rating;
