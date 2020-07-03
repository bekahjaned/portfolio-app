import React from "react";

import InputItem from "../Components/InputItem";
import MessageInput from "../Components/MessageInput";
import SubmitButton from "../Components/SubmitButton";

import Axios from "axios";

class Form extends React.Component {
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
      <div>
        <form onSubmit={this.formSubmit}>
          <InputItem
            htmlFor="name"
            label="Name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleName.bind(this)}
            placeholder="Enter your name..."
          />

          <InputItem
            htmlFor="email"
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleEmail.bind(this)}
            placeholder="Enter your email..."
          />

          <MessageInput
            htmlFor="message"
            label="Message"
            name="message"
            value={this.state.message}
            cols="30"
            rows="5"
            onChange={this.handleMessage.bind(this)}
            placeholder="Enter your message"
          />

          <div className={this.state.sent ? "msg msgAppear" : "msg"}>
            Message has been sent
          </div>

          <SubmitButton label="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
