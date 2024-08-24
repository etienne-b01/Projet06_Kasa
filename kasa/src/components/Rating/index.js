import React from 'react';
import filledRatingStar from '../../assets/rating_star_filled.png';
import emptyRatingStar from '../../assets/rating_star_empty.png';

function Rating({ rating }) {
  const starCount = parseInt(rating, 10);
  const stars = [];
  for (let i = 0; i < starCount; i++) {
    stars.push(
      <img key={`filled-${i}`} src={filledRatingStar} alt="rating point" />
    );
  }
  for (let i = 0; i < 5 - starCount; i++) {
    stars.push(
      <img key={`empty-${i}`} src={emptyRatingStar} alt="empty rating point" />
    );
  }
  return stars;
}

export default Rating;
