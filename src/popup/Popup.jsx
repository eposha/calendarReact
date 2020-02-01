import React from "react";
import Form from "./form/Form";
import "./popup.scss";

const Popup = ({
  isOpen,
  hidePopup,
  handleSubmit,
  valueDataByClick,
  valueTimeByClick,
  handleDateBegin,
  handleTimeBegin,
  deleteOnclick,
  handleChangeName,
  handleChangeDescription,
  handleChangeEndDate,
  handleChangeEndTime,
  nameEvent,
  descriptionEvent,
  endDateEvent,
  endTimeEvent
}) => {
  const hidden = !isOpen ? "hidden-popup" : "show-popup";

  return (
    <div className={`popup ${hidden}`}>
      <button className="close material-icons" onClick={hidePopup}>
        close
      </button>
      <Form
        handleSubmit={handleSubmit}
        valueDataByClick={valueDataByClick}
        valueTimeByClick={valueTimeByClick}
        handleDateBegin={handleDateBegin}
        handleTimeBegin={handleTimeBegin}
        deleteOnclick={deleteOnclick}
        handleChangeName={handleChangeName}
        handleChangeDescription={handleChangeDescription}
        handleChangeEndDate={handleChangeEndDate}
        handleChangeEndTime={handleChangeEndTime}
        nameEvent={nameEvent}
        descriptionEvent={descriptionEvent}
        endDateEvent={endDateEvent}
        endTimeEvent={endTimeEvent}
      />
    </div>
  );
};

export default Popup;
