import React from "react";
import { BsStarHalf, BsStar, BsStarFill } from "react-icons/bs";

const StarRating = ({ rating }) => {
  return (
    <div>
      StarRating
      {[...Array(5)].map((_, i) => {
        let number = i + 0.5;
        return (
          <span>
            {" "}
            {rating >= i + 1 ? (
              <BsStarFill />
            ) : rating === number ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )}{" "}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
