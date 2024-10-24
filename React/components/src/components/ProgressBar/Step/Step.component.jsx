import React from "react";

export function Step({ index }) {
  return (
    <div className="step">
      <p className="index">{index.toString().length <= 1 ? `0${index}` : index}</p>
    </div>
  );
}
