import React, { useState } from "react";
import { ReactComponent as FullStarSvg } from "../../public/svg/full-star.svg";

export function FullStar({ className = "fullstar", onClick, onMouseEnter, onMouseLeave, selected}) {
  return (
    <span className={className} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <FullStarSvg className={selected ? "selected star" : "star"} />
    </span>
  );
}
