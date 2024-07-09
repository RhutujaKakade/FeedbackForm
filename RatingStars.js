import React from 'react';
import Rating from './Rating';
import './RatingStars.css';

const RatingStars = ({ ratings, handleRatingChange }) => {
  return (
    <div className="rating-stars-container">
      <fieldset>
        <label>Rate from 1 to 5:</label>
        <label>⭐⭐⭐⭐⭐​​ represent excellent or outstanding performance,</label>
        <label>while ⭐ points to a poor experience.</label>
      </fieldset>
      <label>
        Did service engineer resolve your issues?<span style={{ color: 'red' }}>*</span>
        <Rating
          value={parseInt(ratings.star_one, 10) || 0}
          onChange={handleRatingChange}
          name="star_one"
        />
      </label>
      <label>
        How would you rate the behaviour of our service engineer?<span style={{ color: 'red' }}>*</span>
        <Rating
          value={parseInt(ratings.star_two, 10) || 0}
          onChange={handleRatingChange}
          name="star_two"
        />
      </label>
      <label>
        How would you rate the knowledge of service engineer?<span style={{ color: 'red' }}>*</span>
        <Rating
          value={parseInt(ratings.star_three, 10) || 0}
          onChange={handleRatingChange}
          name="star_three"
        />
      </label>
      <label>
        Did you get on-time service/response from our service team?<span style={{ color: 'red' }}>*</span>
        <Rating
          value={parseInt(ratings.star_four, 10) || 0}
          onChange={handleRatingChange}
          name="star_four"
        />
      </label>
      <label>
        How effectively did our service engineer train your staff?<span style={{ color: 'red' }}>*</span>
        <Rating
          value={parseInt(ratings.star_five, 10) || 0}
          onChange={handleRatingChange}
          name="star_five"
        />
      </label>
    </div>
  );
};

export default RatingStars;
