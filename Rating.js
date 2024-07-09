import React from 'react';
import ReactStars from 'react-rating-stars-component';

const Rating = ({ value, onChange, name }) => (
  <div>
    <ReactStars
      count={5}
      value={value || 0}
      onChange={(newRating) => onChange(newRating, name)}
      size={30}  // Adjust the size of the stars here
      activeColor="#ffd700"
    />
  </div>
);

export default Rating;
