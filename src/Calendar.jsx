import React from "react";
import Header from "./header/Header";
import MainSection from "./main/MainSection";
import Popup from "./popup/popup";

class Calendar extends React.Component {
  state = {
    setDay: 0,
    popupOpen: false,
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

  handleShowPopup = () => {
    this.setState({
      popupOpen: true
    });
  };

  handleHidePopup = () => {
    this.setState({
      popupOpen: false
    });
  };

  handleSubmit = (nameEvent, descriptionEvent, dateEvent, timeEvent) => {
    this.setState({
      events: [
        ...this.state.events,
        {
          nameEvent,
          descriptionEvent,
          dateEvent,
          startEvent: `${dateEvent}-${timeEvent}`
        }
      ]
    });
    alert("Description is " + this.state.events);
    event.preventDefault();
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
        />
        <Popup
          isOpen={this.state.popupOpen}
          hidePopup={this.handleHidePopup}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Calendar;

// 1. take data from popup
// 2. add this data to state
