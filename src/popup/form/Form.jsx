import React from "react";
import DatesEvent from "./DatesEvetn";
import DescriptionEvent from "./DescriptionEvent";
import FormButtons from "./FormButtons";

const Form = ({
  handleSubmit,
  nameEvent,
  handleChangeName,
  valueDataByClick,
  valueTimeByClick,
  handleDateBegin,
  handleTimeBegin,
  endTimeEvent,
  endDateEvent,
  handleChangeEndTime,
  handleChangeEndDate,
  descriptionEvent,
  handleChangeDescription,
  deleteOnclick,
  isEvent
}) => {
  return (
    <>
      <form className="popup__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="name-event"
          placeholder="Event name"
          value={nameEvent}
          onChange={handleChangeName}
        />
        <DatesEvent
          valueDataByClick={valueDataByClick}
          valueTimeByClick={valueTimeByClick}
          handleDateBegin={handleDateBegin}
          handleTimeBegin={handleTimeBegin}
          valueEndTime={endTimeEvent}
          valueEndDate={endDateEvent}
          handleEndTime={handleChangeEndTime}
          handleEndDate={handleChangeEndDate}
        />
        <DescriptionEvent
          value={descriptionEvent}
          handleChange={handleChangeDescription}
        />
        <FormButtons deleteOnclick={deleteOnclick} isEvent={isEvent} />
      </form>
    </>
  );
};

export default Form;
