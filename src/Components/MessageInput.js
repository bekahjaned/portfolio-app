import React from "react";

class MessageInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="textArea singleItem">
        <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
        <textarea
          name={this.props.name}
          value={this.props.value}
          cols={this.props.cols}
          rows={this.props.rows}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default MessageInput;
