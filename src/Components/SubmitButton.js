import React from "react";

class SubmitButton extends React.Component {
  render() {
    return (
      <div className="btn">
        <button type={this.props.type}>{this.props.label}</button>
      </div>
    );
  }
}

export default SubmitButton;
