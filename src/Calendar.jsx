import React from "react";
import Header from "./header/Header";
import MainSection from "./main/MainSection";

class Calendar extends React.Component {
  state = {
    setDay: 0
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

  render() {
    return (
      <>
        <Header
          nextWeek={this.handleNextWeek}
          prevWeek={this.handlePrevWeek}
          currentWeek={this.handleCurrentWeek}
          addDay={this.state.setDay}
        />
        <MainSection setDateBlock={this.state.setDay} />
      </>
    );
  }
}

export default Calendar;

// +1. Take text from input
// +2. Create task with this text
// +3. Add created task to the list
