import React from "react";
import { generateNumbersRange } from "../utilities";
import BlockHours from "./BlockHours";

const BlockDays = ({ dayId, showPopup, events }) => {
  let idForHour = dayId;
  const blockDay = generateNumbersRange(0, 6).map(arg => {
    let idHour = moment()
      .startOf("isoWeek")
      .add(idForHour, "day")
      .format("YYYY-MM-DD");
    idForHour++;

    return (
      <div key={arg} className="block-day">
        <BlockHours hourId={idHour} events={events} showPopup={showPopup} />
      </div>
    );
  });

  return blockDay;
};

export default BlockDays;
