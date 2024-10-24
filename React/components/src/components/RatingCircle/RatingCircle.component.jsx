import React from "react";

export function RatingCircle({rating = 0}) {
    return <p className={rating <= 3 ? "rating-circle bad" : rating <= 6 ? "rating-circle ok" : rating <= 10 ? "rating-circle great" : "rating-circle"}>{rating}</p>
}