import React from "react";
import { getOptions } from "../getOptionTime.js";

const DatesEvent = ({ value, handleChange, valueHour, handleTimeBegin }) => {
  const options = getOptions();
  return (
    <div className="date-wrapper">
      <i className="Tiny material-icons">access_time</i>
      <input
        type="date"
        className="date-event begin"
        value={value}
        onChange={handleChange}
      />
      <select
        className="bgn-time select-time"
        value={valueHour}
        onChange={handleTimeBegin}
      >
        {options}
      </select>
      <span>-</span>
      <select className="bgn-end select-time">{options}</select>
      <input type="date" className="date-event end" />
    </div>
  );
};

export default DatesEvent;
