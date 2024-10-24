import React, { useState } from "react";
import { FullStar } from "../FullStar/FullStar.component";
import { ReactComponent as HalfStar } from "../../public/svg/half-star.svg";
import { ReactComponent as HalfStarRight } from "../../public/svg/half-star-right.svg";

export default function RaitingBar({
  maxRating = 5,
  useHalfStar = false,
  className = "rating-bar",
}) {
  const [tempRating, setTempRating] = useState(0);
  const rating = 3;

  const handleOnMouseEnter = (index) => {
    setTempRating(index + 1);
  };

  const handleOnMouseLeave = (index) => {
    setTempRating(0);
  };

  return (
    <div className={`${className} rating-bar`}>
      {Array.from({ length: maxRating }).map((_, index) => {
        if (useHalfStar)
          return (
            <div className="half-stars">
              <HalfStar className="icon" />
              <HalfStarRight className="icon" />
            </div>
          );

        return (
          <FullStar
            key={index}
            selected={tempRating ? tempRating >= index + 1 : rating >= index + 1}
            onMouseEnter={() => handleOnMouseEnter(index)}
            onMouseLeave={handleOnMouseLeave}
          />
        );
      })}
      <p className="rating">{tempRating ? tempRating : rating}</p>
    </div>
  );
}
