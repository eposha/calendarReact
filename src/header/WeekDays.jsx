import React from "react";
import { generateNumbersRange } from "../utilities";
import moment from "moment";

const WeekDays = ({ addDay }) => {
  let currentDay = addDay;

  const weekDays = generateNumbersRange(0, 6).map(li => {
    const startOfWeek = moment()
      .startOf("isoWeek")
      .add(currentDay, "day");

    const markCurrentDay =
      moment().format("DD.MM.YY") === startOfWeek.format("DD.MM.YY")
        ? "day-date day-date__current"
        : "day-date ";

    currentDay++;

    return (
      <li key={li} className="week__day">
        <span className="day-name">{startOfWeek.format("ddd")}</span>
        <span className={markCurrentDay}>{startOfWeek.format("DD")}</span>
      </li>
    );
  });

  return <ul className="week">{weekDays}</ul>;
};

export default WeekDays;
