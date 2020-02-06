import React from "react";
import { generateNumbersRange } from "../utilities/utilities";

const HolidayLine = () => {
  const holiday = generateNumbersRange(0, 6).map(arg => (
    <div key={arg} className="holiday__day"></div>
  ));
  return (
    <div className="holiday-wrapper">
      <div className="holiday">{holiday}</div>
    </div>
  );
};

export default HolidayLine;
