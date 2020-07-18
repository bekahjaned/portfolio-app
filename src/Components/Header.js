import React from "react";
import Nav from "@Components/Nav";

class Header extends React.Component {
  render() {
    return (
      <div className="headerContainer">
        <img className="logo" src={this.props.logo} alt="logo" />
        <Nav />
      </div>
    );
  }
}

export default Header;
