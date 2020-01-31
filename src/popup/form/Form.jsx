import React from "react";
import DatesEvent from "./DatesEvetn";
import DescriptionEvent from "./DescriptionEvent";
import FormButtons from "./FormButtons";

class Form extends React.Component {
  state = {
    nameEvent: "",
    descriptionEvent: "",
    dateEvent: "",
    timeEvent: ""
    // startEvent: ""
  };

  handleChangeName = event => {
    this.setState({ nameEvent: event.target.value });
  };

  handleChangeDescription = event => {
    this.setState({ descriptionEvent: event.target.value });
  };

  handleChangeBegin = event => {
    this.setState({ dateEvent: event.target.value });
  };

  handleTimeBegin = event => {
    this.setState({ timeEvent: event.target.value });
  };

  render() {
    const state = [
      this.state.nameEvent,
      this.state.descriptionEvent,
      this.state.dateEvent,
      this.state.timeEvent
    ];

    return (
      <form
        className="popup__form"
        onSubmit={() => this.props.handleSubmit(...state)}
      >
        <input
          type="text"
          className="name-event"
          placeholder="Event name"
          value={this.state.nameEvent}
          onChange={this.handleChangeName}
        />
        <DatesEvent
          value={this.state.dateEvent}
          handleChange={this.handleChangeBegin}
          valueHour={this.state.timeEvent}
          handleTimeBegin={this.handleTimeBegin}
        />
        <DescriptionEvent
          value={this.state.descriptionEvent}
          handleChange={this.handleChangeDescription}
        />
        <FormButtons />
      </form>
    );
  }
}

export default Form;
