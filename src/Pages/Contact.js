import React from "react";

import Form from "../Components/Form";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="hero">Let's Talk</h1>
        <Form />
      </div>
    );
  }
}

export default Contact;
