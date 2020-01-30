import React from "react";
import { generateNumbersRange } from "../utilities";

let events = [
  { time: "2020-01-27-04", text: "This is first test" },
  { time: "2020-01-28-05", text: "This is first test" },
  { time: "2020-01-29-06", text: "This is first test" },
  { time: "2020-01-30-01", text: "This is first test" },
  { time: "2020-01-31-02", text: "This is first test" },
  { time: "2020-02-02-04", text: "This is first test" },
  { time: "2020-02-28-04", text: "This is first test" },
  { time: "2020-02-18-04", text: "This is first test" },
  { time: "2019-12-30-04", text: "This is first test" }
];

const BlockHours = ({ hourId }) => {
  let idForHour = hourId;

  const BlockHour = generateNumbersRange(0, 23).map(arg => {
    const hour = `0${arg}`.slice(-2);
    const id = `${idForHour}-${hour}`;

    let findedEvent = events.find(event => event.time === id);

    let event = !findedEvent ? null : (
      <div className="event">
        <span>{findedEvent.time}</span>
        <span>{findedEvent.text}</span>
      </div>
    );

    return (
      <div key={arg} className="block-hour">
        {event}
      </div>
    );
  });
  return BlockHour;
};

export default BlockHours;
