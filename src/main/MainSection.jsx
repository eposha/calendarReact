import React from "react";
import HolidayLine from "./HolidayLine";
import TimesDay from "./TimesDay";
import TimeLines from "./TimeLines";
import BlockDay from "./BlockDay";
import "./mainSection.scss";

class MainSection extends React.Component {
  render() {
    return (
      <section className="main">
        <HolidayLine />
        <div className="wrapper-time">
          <div className="time">
            <TimesDay />
            <TimeLines />
          </div>
          <BlockDay dayId={this.props.setDateBlock} />
        </div>
      </section>
    );
  }
}

export default MainSection;
