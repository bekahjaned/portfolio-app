import React from "react";

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="btn">
        <button type="button">{this.props.label}</button>
      </div>
    );
  }
}

export default SubmitButton;
