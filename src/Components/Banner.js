import React from "react";

class Banner extends React.Component {
  render() {
    return <img className="center" src={this.props.display} alt="" />;
  }
}

export default Banner;
