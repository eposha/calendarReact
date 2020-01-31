import React from "react";

const DescriptionEvent = ({ value, handleChange }) => {
  return (
    <div className="description ">
      <i className="Tiny material-icons ">format_align_left</i>
      <textarea
        className="description-input "
        name="description"
        cols="42 "
        rows="4 "
        placeholder="Add description "
        value={value}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default DescriptionEvent;
