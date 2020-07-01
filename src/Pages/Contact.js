import React from "react";

import Hero from "../Components/Hero";
import Form from "../Components/Form";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroText: "Let's talk",
    };
  }

  render() {
    return (
      <div className="container">
        <Hero text={this.state.heroText} />
        <Form />
      </div>
    );
  }
}

export default Contact;
