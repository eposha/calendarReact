import React from "react";
import { generateNumbersRange } from "../utilities";

const WeekDays = () => {
  const weekDays = generateNumbersRange(0, 6).map(li => (
    <li key={li} className="week__day">
      <span className="day-name">WN</span>
      <span className="day-date">29</span>
    </li>
  ));

  return <ul className="week">{weekDays}</ul>;
};

export default WeekDays;
