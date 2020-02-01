import React from "react";
import HolidayLine from "./HolidayLine";
import TimesDay from "./TimesDay";
import TimeLines from "./TimeLines";
import BlockDay from "./BlockDay";
import "./mainSection.scss";

class MainSection extends React.Component {
  render() {
    const {
      showPopup,
      setDateBlock,
      events,
      deleteEvent,
      dateEvent
    } = this.props;
    return (
      <section className="main">
        <HolidayLine />
        <div className="wrapper-time">
          <div className="time">
            <TimesDay />
            <TimeLines />
          </div>
          <BlockDay
            dayId={setDateBlock}
            showPopup={showPopup}
            events={events}
            dateEvent={dateEvent}
            deleteEvent={deleteEvent}
          />
        </div>
      </section>
    );
  }
}

export default MainSection;
