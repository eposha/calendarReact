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
  deleteOnclick
}) => {
  // state = {
  //   nameEvent: "",
  //   descriptionEvent: "",
  //   endDateEvent: "",
  //   endTimeEvent: ""
  // };

  // handleChangeName = event => {
  //   setState({ nameEvent: event.target.value });
  // };

  // handleChangeDescription = event => {
  //   setState({ descriptionEvent: event.target.value });
  // };

  // handleChangeEndDate = event => {
  //   setState({
  //     endDateEvent: event.target.value
  //   });
  // };

  // handleChangeEndTime = event => {
  //   setState({
  //     endTimeEvent: event.target.value
  //   });
  // };

  // render() {
  //   const state = [
  //     nameEvent,
  //     descriptionEvent,
  //     endTimeEvent,
  //     endDateEvent
  //   ];

  return (
    <>
      <form className="popup__form" onSubmit={() => handleSubmit()}>
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
        <FormButtons deleteOnclick={deleteOnclick} />
      </form>
    </>
  );
};

export default Form;
