import React, { Component } from "react";
import axios from "axios";
import { withNamespaces } from "react-i18next";
import ConfigData from "./config.json";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = (errors) => {
  let valid = true;

  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      number: "",
      message: "",
      mailSent: false,
      error: null,
      errors: { fname: "", lname: "", email: "", number: "", message: "" },
    };
  }

  validate = () => {
    if (
      !this.state.fname ||
      !this.state.lname ||
      !this.state.email ||
      !this.state.number ||
      !this.state.message
    ) {
      return false;
    }
    return true;
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fname":
        errors.fname =
          value.length < 2 ? "First Name must be 5 characters long!" : "";
        break;

      case "lname":
        errors.lname =
          value.length < 2 ? "Last Name must be 5 characters long!" : "";
        break;

      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "number":
        errors.number =
          value.length < 8 ? "Number must be 8 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (e) => {
    // const API_PATH = "http://192.168.0.21:60/messages/sendcontactmessages.php"-->ngrok port 60;
    //const API_PATH =
    // "https://5e03dfb24ebb.ngrok.io/messages/sendcontactmessages.php";
    // "http://perledorange.com/sendcontactmessages.php";
    const API_PATH = ConfigData.LIVE_URL + ConfigData.CONTACTUS;
    e.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,

      data: this.state,
    })
      .then((result) => {
        this.setState({
          mailSent: result.data.sent,
        });
        console.log(result);
        console.log(this.state);
      })
      .catch(function (error) {
        //this.setState({ error: error.message })
        console.log(error);
      });
    // .catch(error => this.setState({ error: error.message }));
  };

  sendEmail = (e) => {
    // const API_PATH = "https://db11e019.ngrok.io/perledorangesendemail.php";
    // const API_PATH = "http://192.168.0.21:88/index.php";
    const API_PATH = ConfigData.NGROK + ConfigData.SEND_EMAIL;
    e.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,

      data: this.state,
    })
      .then((result) => {
        this.setState({
          //mailSent: result.data.sent
          mailSent: true,
        });
        console.log(result);
        console.log(this.state);
      })
      .catch(function (error) {
        //this.setState({ error: error.message })
        console.log(error);
      });
    // .catch(error => this.setState({ error: error.message }));
  };

  execute = (event) => {
    // this.handleChange(e);
    event.preventDefault();
    if (validateForm(this.state.errors) && this.validate()) {
      console.info("Valid Form");
      this.handleSubmit(event);
      this.sendEmail(event);
      this.setState({
        fname: "",
        lname: "",
        email: "",
        number: "",
        message: "",
      });
    } else {
      console.error("Invalid Form");
      return;
    }
  };

  render() {
    const { t } = this.props;
    const { errors } = this.state;
    return (
      <div>
        <div>
          <form action="#">
            <label>{t("pages.contact.text.firstname")}</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder={t("pages.contact.text.firstnameph")}
              value={this.state.fname}
              onChange={(e) => {
                this.setState({ fname: e.target.value });
                this.handleChange(e);
              }}
            />
            {errors.fname.length > 0 && <div>{errors.fname}</div>}
            <br />
            <label>{t("pages.contact.text.lastname")}</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder={t("pages.contact.text.lastnameph")}
              value={this.state.lname}
              onChange={(e) => {
                this.setState({ lname: e.target.value });
                this.handleChange(e);
              }}
            />
            {errors.lname.length > 0 && <div>{errors.lname}</div>}
            <br />
            <label>{t("pages.contact.text.email")}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("pages.contact.text.emailph")}
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
                this.handleChange(e);
              }}
            />
            {errors.email.length > 0 && <div>{errors.email}</div>}
            <br />

            <label>{t("pages.contact.text.phone")}</label>
            <input
              type="text"
              id="number"
              name="number"
              placeholder={t("pages.contact.text.phoneph")}
              value={this.state.number}
              onChange={(e) => {
                this.setState({ number: e.target.value });
                this.handleChange(e);
              }}
            />
            {errors.number.length > 0 && <div>{errors.number}</div>}
            <br />

            <label>{t("pages.contact.text.subject")}</label>
            <textarea
              id="message"
              name="message"
              placeholder={t("pages.contact.text.subjectph")}
              value={this.state.message}
              onChange={(e) => {
                this.setState({ message: e.target.value });
                this.handleChange(e);
              }}
            ></textarea>
            {errors.message.length > 0 && <div>{errors.message}</div>}
            <br />
            <input
              type="submit"
              onClick={(e) => this.execute(e)}
              value={t("pages.contact.text.submit")}
            />
            <div>
              {this.state.mailSent && (
                <div>
                  {t("pages.contact.text.thankyou1")} <br />
                  {t("pages.contact.text.thankyou2")}
                  <br />
                  {t("pages.contact.text.thankyou3")}{" "}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withNamespaces()(Contact);
