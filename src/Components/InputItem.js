import React from "react";

class InputItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="singleItem">
        <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
        <input
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          required
        />
      </div>
    );
  }
}

export default InputItem;
