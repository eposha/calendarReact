import React from "react";
import { generateNumbersRange } from "../utilities";
import BlockHours from "./BlockHours";

const BlockDays = () => {
  const blockDay = generateNumbersRange(0, 6).map(arg => (
    <div key={arg} className="block-day">
      <BlockHours />
    </div>
  ));

  return blockDay;
};

export default BlockDays;
