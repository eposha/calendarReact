import React from "react";
import { generateNumbersRange } from "../utilities/utilities";
import BlockHours from "./BlockHours";
import Redline from "./RedLine";
import moment from "moment";

const BlockDays = ({
  dayId,
  showPopup,
  events,
  showEventData,
  dateEvent,
  blink
}) => {
  let idForHour = dayId;
  const blockDay = generateNumbersRange(0, 6).map(arg => {
    let idHour = moment()
      .startOf("isoWeek")
      .add(idForHour, "day")
      .format("YYYY-MM-DD");
    idForHour++;

    const redline =
      idHour === moment().format("YYYY-MM-DD") ? <Redline /> : null;

    return (
      <div key={arg} className="block-day">
        {redline}
        <BlockHours
          hourId={idHour}
          events={events}
          showPopup={showPopup}
          dateEvent={dateEvent}
          showEventData={showEventData}
          blink={blink}
        />
      </div>
    );
  });

  return blockDay;
};

export default BlockDays;
