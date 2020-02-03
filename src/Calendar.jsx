import React from "react";
import Header from "./header/Header";
import MainSection from "./main/MainSection";
import Popup from "./popup/popup";
import { validationIntersect } from "./validationIntersect";
import { validation } from "./validation";
import { validateDelete } from "./validateDelete";

class Calendar extends React.Component {
  state = {
    setDay: 0,
    popupOpen: false,
    nameEvent: "",
    descriptionEvent: "",
    endDateEvent: "",
    endTimeEvent: "",
    dateEvent: "",
    timeEvent: "",
    deleteEvent: "",
    isDelete: false,
    isEvent: false,
    blink: "",
    events: []
  };

  handleNextWeek = () => {
    this.setState({
      setDay: this.state.setDay + 7
    });
  };

  handlePrevWeek = () => {
    this.setState({
      setDay: this.state.setDay - 7
    });
  };

  handleCurrentWeek = () => {
    this.setState({
      setDay: 0
    });
  };

  handleHidePopup = () => {
    this.setState({
      popupOpen: false,
      blink: ""
    });
  };

  handleChangeName = event => {
    this.setState({ nameEvent: event.target.value });
  };

  handleChangeDescription = event => {
    this.setState({ descriptionEvent: event.target.value });
  };

  handleChangeEndDate = event => {
    this.setState({
      endDateEvent: event.target.value
    });
  };

  handleChangeEndTime = event => {
    this.setState({
      endTimeEvent: event.target.value
    });
  };

  handleDateBegin = event => {
    this.setState({ dateEvent: event.target.value });
  };

  handleTimeBegin = event => {
    this.setState({ timeEvent: event.target.value });
  };

  handleShowPopup = (dateStart, timeEvent, endTimeEvent) => {
    if (event.target.className === "block-hour") {
      this.setState({
        popupOpen: true,
        dateEvent: dateStart,
        endDateEvent: dateStart,
        timeEvent,
        endTimeEvent,
        nameEvent: "",
        descriptionEvent: "",
        isEvent: false,
        deleteEvent: "",
        blink: ""
      });
    }
  };

  showEventData = (
    date,
    nameEvent,
    descriptionEvent,
    endDateEvent,
    endTimeEvent,
    dateEvent,
    timeEvent
  ) => {
    if (
      event.target.className === "event" ||
      event.target.tagName === "SPAN" ||
      event.target.className === "event blink1"
    ) {
      this.setState({
        popupOpen: true,
        isEvent: true,
        deleteEvent: date,
        nameEvent,
        descriptionEvent,
        endDateEvent,
        endTimeEvent: endTimeEvent,
        dateEvent,
        timeEvent,
        blink: ""
      });
    }
  };

  deleteEvent = () => {
    this.setState({
      isDelete: true
    });
  };

  clearForm = () => {
    this.setState({
      popupOpen: false,
      startEvent: "",
      nameEvent: "",
      descriptionEvent: "",
      endDateEvent: "",
      endTimeEvent: "",
      dateEvent: "",
      timeEvent: ""
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let intersect = validationIntersect(
      this.state.dateEvent,
      this.state.endDateEvent,
      this.state.timeEvent,
      this.state.endTimeEvent,
      this.state.events,
      this.state.deleteEvent
    );
    if (intersect) {
      this.setState({
        blink: intersect.startEvent
      });
      return;
    }
    if (!this.state.isDelete) {
      const valid = validation(
        this.state.dateEvent,
        this.state.endDateEvent,
        this.state.timeEvent,
        this.state.endTimeEvent,
        this.state.events,
        this.state.isDelete,
        this.state.deleteEvent
      );
      if (!valid) return;
      this.setState({
        events: [
          ...this.state.events.filter(
            event => event.startEvent !== this.state.deleteEvent
          ),
          {
            startEvent: `${this.state.dateEvent}-${this.state.timeEvent}`,
            endEvent: `${this.state.endDateEvent}-${this.state.endTimeEvent}`,
            nameEvent: this.state.nameEvent,
            descriptionEvent: this.state.descriptionEvent,
            endDateEvent: this.state.endDateEvent,
            endTimeEvent: this.state.endTimeEvent,
            dateEvent: this.state.dateEvent,
            timeEvent: this.state.timeEvent
          }
        ],
        blink: ""
        // .filter(event => event.startEvent !== this.state.deleteEvent)
      });
    } else {
      if (!validateDelete(this.state.deleteEvent)) {
        this.setState({
          isDelete: false
        });
        return;
      }
      this.setState({
        events: this.state.events.filter(
          event => event.startEvent !== this.state.deleteEvent
        ),
        popupOpen: false,
        isDelete: false
      });
    }
    this.clearForm();
  };

  render() {
    return (
      <div className="calendar">
        <Header
          nextWeek={this.handleNextWeek}
          prevWeek={this.handlePrevWeek}
          currentWeek={this.handleCurrentWeek}
          addDay={this.state.setDay}
          showPopup={this.handleShowPopup}
        />
        <MainSection
          setDateBlock={this.state.setDay}
          showPopup={this.handleShowPopup}
          events={this.state.events}
          showEventData={this.showEventData}
          blink={this.state.blink}
        />
        <Popup
          isOpen={this.state.popupOpen}
          hidePopup={this.handleHidePopup}
          handleSubmit={this.handleSubmit}
          valueDataByClick={this.state.dateEvent}
          valueTimeByClick={this.state.timeEvent}
          handleDateBegin={this.handleDateBegin}
          handleTimeBegin={this.handleTimeBegin}
          deleteOnclick={this.deleteEvent}
          handleChangeName={this.handleChangeName}
          handleChangeDescription={this.handleChangeDescription}
          handleChangeEndDate={this.handleChangeEndDate}
          handleChangeEndTime={this.handleChangeEndTime}
          nameEvent={this.state.nameEvent}
          descriptionEvent={this.state.descriptionEvent}
          endDateEvent={this.state.endDateEvent}
          endTimeEvent={this.state.endTimeEvent}
          isEvent={this.state.isEvent}
        />
      </div>
    );
  }
}

export default Calendar;

// 1. take data from popup
// 2. add this data to state
