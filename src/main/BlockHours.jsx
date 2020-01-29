import React from "react";
import { generateNumbersRange } from "../utilities";

const BlockHours = () => {
  const BlockHour = generateNumbersRange(0, 23).map(arg => (
    <div key={arg} className="block-hour"></div>
  ));
  return BlockHour;
};

export default BlockHours;
