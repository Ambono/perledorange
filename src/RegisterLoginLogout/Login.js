import React, { Component } from "react";
import axios from "axios";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";
import { Redirect } from "react-router";
import Home from "../Home";
import MyPage from "./MyPage";

const validEmailRegex = RegExp(
  /^(([^<>()\\[\]\\.,;:\s@\\"]+(\.[^<>()\\[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i
);

const validateForm = (errors) => {
  let valid = true;

  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};

class Login extends Component {
  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
  //     console.log(res);
  //     this.setState({ persons: res.data });
  //   });
  // };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
      error: null,
      errors: { email: "", password: "" },
    };
  }

  validate = () => {
    if (!this.state.email || !this.state.password) {
      return false;
    }
    return true;
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "password":
        errors.password =
          value.length < 4 ? "Password must be 6 characters long!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (e) => {
    const BASE_URL = "http://localhost:50/perledorange/serverperledorange";
    const API_PATH = BASE_URL + "/RegisterLogin/LoginMaker.php";
    //const API_PATH ="https://f62c4a80.ngrok.io/messages/sendcontactmessages.php";

    e.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,

      data: this.state,
    })
      .then((result) => {
        if (result.status === 200) {
          console.log("REDIRECTION avec status => ", result.status);
          // how to redirect here
          this.setState({ isLoggedIn: true });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  execute = (event) => {
    // this.handleChange(e);
    event.preventDefault();
    if (validateForm(this.state.errors) && this.validate()) {
      console.info("Valid Form");
      this.handleSubmit(event);
      this.setState({
        email: "",
        password: "",
      });
    } else {
      console.error("Invalid Form");
      return;
    }
  };

  // if (!this.state.isLoggedIn)
  // {
  //   // redirect to home if signed up
  //   <Redirect to={{ pathname: "/Home" }} />
  // }
  render() {
    const { t } = this.props;
    const { errors } = this.state;
     if (this.state.isLoggedIn)
  { 
    return <Redirect to={{ pathname: "/mypage" }} />
  }
    return (
      <div className="container">
        <div id="container_content">
          <h1>{t("pages.login.text.header1")}</h1>
          <form action="#">
            <br />
            <label>{t("pages.login.text.email")}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("pages.login.text.emailph")}
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
                this.handleChange(e);
              }}
            />
            {errors.email.length > 0 && <div></div>}
            <br />
            {errors.password.length > 0 && (
              <div>
                {errors.email} or {errors.password}
              </div>
            )}
            <br />
            <label>{t("pages.login.text.password")}</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder={t("pages.login.text.passwordph")}
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
                this.handleChange(e);
              }}
            />
            {errors.password.length > 0 && <div>{errors.password}</div>}
            <br />
            <input
              type="submit"
              onClick={(e) => this.execute(e)}
              value={t("pages.login.text.submit")}
            />
          
          </form>
          }
        </div>
      </div>
    );
  }
}

export default withNamespaces()(Login);
