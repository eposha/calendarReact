import React from "react";
import { generateNumbersRange } from "../utilities";
import moment from "moment";

const BlockHours = ({ hourId, events, showPopup, deleteEvent }) => {
  let idForHour = hourId; //YYYY-MM-DD

  const BlockHour = generateNumbersRange(0, 23).map(arg => {
    const hour = `0${arg}`.slice(-2);
    const id = `${idForHour}-${hour}`;
    let some = events;
    let findedEvent = events.find(
      event => event.startEvent.slice(0, -3) === id
    );

    let event;
    if (findedEvent) {
      const marginTopEvent = `${findedEvent.startEvent.slice(-2)}px`;

      let endHour = moment(findedEvent.endTimeEvent, "HH:mm").format("HH");
      if (endHour === "00") endHour = 24;
      const startHour = moment(findedEvent.timeEvent, "HH:mm").format("HH");
      const endMinutes = +findedEvent.endTimeEvent.slice(-2);
      const startMinutes = +findedEvent.timeEvent.slice(-2);

      const heightEvent = `${endHour * 60 -
        startHour * 60 +
        endMinutes -
        startMinutes}px`;
      event = (
        <div
          className="event"
          style={{ marginTop: `${marginTopEvent}`, height: `${heightEvent}` }}
          onClick={() => deleteEvent(findedEvent.startEvent)}
        >
          <span>{findedEvent.startEvent}</span>
          <span>{findedEvent.nameEvent}</span>
        </div>
      );
    }

    return (
      <div
        key={arg}
        className="block-hour"
        onClick={() => showPopup(idForHour, `${hour}:00`)}
      >
        {event}
      </div>
    );
  });
  return BlockHour;
};

export default BlockHours;
