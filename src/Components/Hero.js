import React from "react";

class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1 className="hero">{this.props.text}</h1>;
  }
}

export default Hero;
