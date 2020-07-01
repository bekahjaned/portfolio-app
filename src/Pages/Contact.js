import React from "react";

import Axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      sent: false,
    };
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    Axios.post("/api/forma", data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };

  render() {
    return (
      <div className="container">
        <h1 className="hero">Let's Talk</h1>
        <form onSubmit={this.formSubmit}>
          <div className="singleItem">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleName}
              placeholder="Enter your name..."
            />
          </div>

          <div className="singleItem">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleEmail}
              placeholder="Enter your email..."
              required
            />
          </div>

          <div className="textArea singleItem">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={this.state.message}
              cols="30"
              rows="5"
              placeholder="Enter your message..."
              onChange={this.handleMessage}
            />
          </div>

          <div className={this.state.sent ? "msg msgAppear" : "msg"}>
            Message has been sent
          </div>

          <div className="btn">
            <button type="button">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
