import React from "react";
import Form from "./form/Form";
import "./popup.scss";

class Popup extends React.Component {
  render() {
    const { isOpen, hidePopup, handleSubmit } = this.props;
    const hidden = !isOpen ? "hidden-popup" : "show-popup";

    return (
      <div className={`popup ${hidden}`}>
        <button className="close material-icons" onClick={hidePopup}>
          close
        </button>
        <Form handleSubmit={handleSubmit} />
      </div>
    );
  }
}

export default Popup;
