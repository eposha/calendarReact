import React from "react";
import HolidayLine from "./HolidayLine";
import TimesDay from "./TimesDay";
import TimeLines from "./TimeLines";
import BlockDay from "./BlockDay";
import "./mainSection.scss";

const MainSection = () => {
  return (
    <section className="main">
      <HolidayLine />
      <div className="wrapper-time">
        <div className="time">
          <TimesDay />
          <TimeLines />
        </div>
        <BlockDay />
      </div>
    </section>
  );
};

export default MainSection;