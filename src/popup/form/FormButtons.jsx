import React from "react";

const FormButtons = ({ deleteOnclick }) => {
  return (
    <div className="control ">
      <button className="delete-ivent " onClick={() => deleteOnclick()}>
        <i className="Tiny material-icons ">delete</i>
      </button>
      <button className="submit-button ">Save</button>
    </div>
  );
};

export default FormButtons;
