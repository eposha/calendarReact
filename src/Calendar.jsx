import React from "react";
import Header from "./header/Header";
import MainSection from "./main/MainSection";
import Popup from "./popup/popup";
import { validationIntersect } from "./validation/validationIntersect";
import { validation } from "./validation/validation";
import { validateDelete } from "./validation/validateDelete";
import {
  createEvent,
  fetchEvents,
  deleteEvents
} from "./http_request/eventsGateway";

class Calendar extends React.Component {
  state = {
    diffWithMondayOfThis: 0,
    deleteEventData: "",
    isEvent: false,
    blink: "",
    events: [],
    popupData: false
  };

  handleNextWeek = () => {
    this.setState({
      diffWithMondayOfThis: this.state.diffWithMondayOfThis + 7
    });
  };

  handlePrevWeek = () => {
    this.setState({
      diffWithMondayOfThis: this.state.diffWithMondayOfThis - 7
    });
  };

  handleCurrentWeek = () => {
    this.setState({
      diffWithMondayOfThis: 0
    });
  };

  handleHidePopup = () => {
    this.setState({
      blink: "",
      popupData: false
    });
  };

  handleShowPopup = (dateStart, timeEvent, endTimeEvent) => {
    if (event.target.className === "block-hour") {
      this.setState({
        popupData: {
          dateEvent: dateStart,
          endDateEvent: dateStart,
          timeEvent,
          endTimeEvent,
          descriptionEvent: "",
          nameEvent: ""
        },
        isEvent: false,
        blink: ""
      });
    }
  };

  showEventData = ({
    date,
    nameEvent,
    descriptionEvent,
    endDateEvent,
    endTimeEvent,
    dateEvent,
    timeEvent,
    id
  }) => {
    console.log(id);
    if (
      event.target.className === "event" ||
      event.target.tagName === "SPAN" ||
      event.target.className === "event blink1"
    ) {
      this.setState({
        popupOpen: true,
        isEvent: true,
        deleteEvent: date,
        popupData: {
          nameEvent,
          descriptionEvent,
          endDateEvent,
          endTimeEvent,
          dateEvent,
          timeEvent,
          id
        },
        deleteEventData: `${dateEvent}-${timeEvent}`,
        isEvent: true,
        blink: "",
        id
      });
    }
  };

  deleteEvent = () => {
    if (!validateDelete(this.state.deleteEventData)) {
      this.setState({
        deleteEventData: false
      });
      return;
    }
    deleteEvents(this.state.id).then(() => {
      fetchEvents().then(events => {
        this.setState({
          events: events,
          blink: "",
          popupData: "",
          id: null
        });
      });
    });
  };

  componentDidMount() {
    fetchEvents().then(events => {
      this.setState({
        events: events,
        blink: "",
        id: null
      });
    });
  }

  handleSubmit = event => {
    if (!validation(event, this.state.events, this.state.deleteEventData))
      return;
    let intersect = validationIntersect(
      event,
      this.state.events,
      this.state.deleteEventData
    );
    if (intersect) {
      this.setState({
        blink: intersect.startEvent
      });
      return;
    }
    if (this.state.id) {
      this.deleteEvent();
    }
    createEvent(event).then(() => {
      fetchEvents().then(events => {
        this.setState({
          events: events,
          blink: "",
          popupData: ""
        });
      });
    });
  };

  render() {
    return (
      <div className="calendar">
        <Header
          nextWeek={this.handleNextWeek}
          prevWeek={this.handlePrevWeek}
          currentWeek={this.handleCurrentWeek}
          addDay={this.state.diffWithMondayOfThis}
          showPopup={this.handleShowPopup}
        />
        <MainSection
          setDateBlock={this.state.diffWithMondayOfThis}
          showPopup={this.handleShowPopup}
          events={this.state.events}
          showEventData={this.showEventData}
          blink={this.state.blink}
        />
        {this.state.popupData && (
          <Popup
            {...this.state.popupData}
            hidePopup={this.handleHidePopup}
            handleSubmit={this.handleSubmit}
            deleteEvent={this.deleteEvent}
            isEvent={this.state.isEvent}
          />
        )}
      </div>
    );
  }
}

export default Calendar;
