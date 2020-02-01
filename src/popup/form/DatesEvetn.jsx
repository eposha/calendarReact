import React from "react";
import { getOptionsBegin } from "../getOptionBegin.js";
import { getOptionsEnd } from "../getOptionEnd.js";

const DatesEvent = ({
  handleDateBegin,
  handleTimeBegin,
  valueDataByClick,
  valueTimeByClick,
  valueEndTime,
  valueEndDate,
  handleEndTime,
  handleEndDate
}) => {
  const optionBegin = getOptionsBegin();
  const optionEnd = getOptionsEnd();
  return (
    <div className="date-wrapper">
      <i className="Tiny material-icons">access_time</i>
      <input
        type="date"
        className="date-event begin"
        value={valueDataByClick}
        onChange={handleDateBegin}
      />
      <select
        className="bgn-time select-time"
        value={valueTimeByClick}
        onChange={handleTimeBegin}
      >
        {optionBegin}
      </select>
      <span>-</span>
      <select
        className="bgn-end select-time"
        value={valueEndTime}
        onChange={handleEndTime}
      >
        {optionEnd}
      </select>
      <input
        type="date"
        className="date-event end"
        value={valueEndDate}
        onChange={handleEndDate}
      />
    </div>
  );
};

export default DatesEvent;
