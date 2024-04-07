import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

const StarRating = ({ noOfStars = 5 }) => {
  // Combined state for rating and hover (improves performance)
  const [ratingState, setRatingState] = useState({ rating: 0, hover: 0 });

  const handleClick = (currentIndex) => {
    setRatingState({ ...ratingState, rating: currentIndex });
  };

  const handleMouseEnter = () => {
    setRatingState({ ...ratingState, hover: ratingState.rating });
  };

  const handleMouseMove = (currentIndex) => {
    setRatingState({ ...ratingState, hover: currentIndex });
  };

  const handleMouseLeave = () => {
    setRatingState({ ...ratingState, hover: ratingState.rating });
  };

  // Ensure noOfStars is a positive integer
  const validNoOfStars = Math.max(1, Math.floor(noOfStars)); // Handle non-positive values

  return (
    <div className="star-rating">
      {[...Array(validNoOfStars)].map((_, index) => {
        const starIndex = index + 1;
        const isActive = starIndex <= ratingState.hover;

        return (
          <FaStar
            key={starIndex}
            className={isActive ? "active" : "inactive"}
            onClick={() => handleClick(starIndex)}
            onMouseEnter={handleMouseEnter} // Combined handler for hover effect
            onMouseMove={() => handleMouseMove(starIndex)}
            onMouseLeave={handleMouseLeave}
            size={40} // Size of icon
          />
        );
      })}
      <br />
      Your Rating is: {ratingState.rating}
    </div>
  );
};

export default StarRating;
