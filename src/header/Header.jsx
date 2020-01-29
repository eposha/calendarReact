import React from "react";
import AddButton from "./AddButton";
import TodayButton from "./TodayButton";
import NavigationButtons from "./NavigationButtons";
import WeekDays from "./WeekDays";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="navigation">
        <AddButton />
        <TodayButton />
        <NavigationButtons />
        <div className="current-month">January 29</div>
      </div>
      <WeekDays />
    </div>
  );
};

export default Header;
