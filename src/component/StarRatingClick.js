import React, { useState } from "react";
import {  BsStar, BsStarFill } from "react-icons/bs";

const StarRatingClick = () => {
    const [rating, setRating]= useState(0);


    const starUpdate =(star)=>{
    setRating(star)
}

    return (
        <div>
            StarRating
            {[...Array(5)].map((_, i) => {
                return (
                    <span>
                        {" "}
                        {rating >= i+1  ? (
                            <BsStarFill onClick={() => starUpdate(i + 1)} />
                        ) : (
                                <BsStar onClick={() => starUpdate(i+1)} />
                        )}{" "}
                    </span>
                );
            })}
        </div>
    );
};

export default StarRatingClick;
