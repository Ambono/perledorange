import React, { Component } from "react";
import axios from "axios";
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';


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
  

class Login extends Component {


  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      console.log(res);
      this.setState({ persons: res.data });
    });
  };

  
constructor(props) {
    super(props);
    this.state = { 
        persons: [],    
      email: "",     
      password: "",     
      error: null,
      errors: {  email: "",  password:""},
    };
  }

  validate = () => {
    if (    
      !this.state.email ||     
      !this.state.password      
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
    const API_PATH = "http://localhost:50/RegisterLogin/Register.php";
    //const API_PATH ="https://f62c4a80.ngrok.io/messages/sendcontactmessages.php";
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

  execute = (event) => {
    // this.handleChange(e);
    event.preventDefault();
    if (validateForm(this.state.errors) && this.validate()) {
      console.info("Valid Form");
      this.handleSubmit(event);      
      this.setState({
      
        email: "",     
        password: ""       
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
         <ul>
        { this.state.persons.map(person => <li>{person.name}</li>) }
      </ul>
      </div>

      <div className="container">
        <div  id ="container_content">
          <form action="#">
            
            <br />
            <label>{t("pages.register.text.email")}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("pages.register.text.emailph")}
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
                this.handleChange(e);
              }}
            />
            {errors.email.length > 0 && <div></div>}
            <br />

            {errors.password.length > 0 && <div>{errors.email} or  {errors.password}</div>}
            <br />

            <label>{t("pages.register.text.password")}</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder={t("pages.register.text.passwordph")}
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
        </div>
      </div>
      </div>

     
    )
  }
}

export default withNamespaces()(Login);




