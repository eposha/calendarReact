import React from "react";
import moment from "moment";

const AddButton = ({ showPopup }) => {
  const todayDate = moment().format("YYYY-MM-DD");
  return (
    <button
      className="add-button add-event"
      onClick={() => showPopup(todayDate, "09:00", "10:00")}
    >
      <div className="VVsfQ add-event">
        <svg className="add-event" width="36" height="36" viewBox="0 0 36 36">
          <path className="add-event" fill="#34A853" d="M16 16v14h4V20z"></path>
          <path
            className="add-event"
            fill="#4285F4"
            d="M30 16H20l-4 4h14z"
          ></path>
          <path className="add-event" fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
          <path className="add-event" fill="#EA4335" d="M20 16V6h-4v14z"></path>
          <path className="add-event" fill="none" d="M0 0h36v36H0z"></path>
        </svg>
      </div>
      <span className="add-button__text add-event">Create</span>
    </button>
  );
};

export default AddButton;
