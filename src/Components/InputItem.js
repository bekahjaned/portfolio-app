import React from "react";

class InputItem extends React.Component {
  constructor(props) {
    super(props);
  }

  //   left off: making this component,
  //   need to add all the attributes as props!
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
        />
      </div>
    );
  }
}

export default InputItem;
