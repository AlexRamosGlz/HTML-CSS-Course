import React from "react";
import { Step } from "./Step/Step.component";

export function StepsBar({ steps,}) {
  return <div className="steps-bar">
    {steps.map((step, index) => <Step index={index + 1} key={index + 1}/>)}
    <div className="steps-progress"></div>
  </div>;
}
