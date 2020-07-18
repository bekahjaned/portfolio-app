import React from "react";

import InputItem from "../Components/InputItem";
import MessageInput from "../Components/MessageInput";
import SubmitButton from "../Components/SubmitButton";

import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach((val) => {
    val === "" && (valid = false);
  });

  return valid;
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      formErrors: {
        name: "",
        email: "",
        message: "",
      },
    };
  }

  toastifySuccess() {
    toast.success("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    });
  }

  toastifyFail() {
    toast.error("Form failed to send! Did you fill out all the fields?", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      const { name, email, message } = this.state;

      let templateParams = {
        name: name,
        email: email,
        message: message,
      };

      emailjs.send(
        "gmail",
        "portfolio_contact",
        templateParams,
        "user_uFBt7OJSbpoxTLb0kocyH"
      );

      console.log(`
      ---SUBMITTING---
      Name: ${name}
      Email: ${email}
      Message: ${message}
      `);

      this.toastifySuccess();
      this.resetForm();
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      this.toastifyFail();
    }
  };

  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name = value.length < 1 ? "Please enter your name." : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Please enter a valid email.";
        break;
      case "message":
        formErrors.message = value.length < 1 ? "Please enter a message." : "";
        break;
      default:
        break;
    }

    this.setState({
      formErrors,
      [name]: value,
    });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate>
          <InputItem
            htmlFor="name"
            label="Name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter your name..."
            noValidate
            length={formErrors.name.length}
            error={formErrors.name}
          />

          <InputItem
            htmlFor="email"
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Enter your email..."
            noValidate
            length={formErrors.email.length}
            error={formErrors.email}
          />

          <MessageInput
            htmlFor="message"
            label="Message"
            name="message"
            value={this.state.message}
            cols="30"
            rows="5"
            onChange={this.handleChange}
            placeholder="Enter your message"
            noValidate
            length={formErrors.message.length}
            error={formErrors.message}
          />

          <SubmitButton label="Submit" type="submit" />
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default Form;
