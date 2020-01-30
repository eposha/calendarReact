import React from "react";
import { generateNumbersRange } from "../utilities";

const BlockHours = () => {
  const click = event => {};
  const BlockHour = generateNumbersRange(0, 23).map(arg => (
    <div
      key={arg}
      className="block-hour"
      id={`hour-${arg}`}
      onClick={click}
    ></div>
  ));
  return BlockHour;
};

export default BlockHours;
