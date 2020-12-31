// import React, { Component } from "react";
// import { withNamespaces } from "react-i18next";
// import "../index.css";
// import Login from "./Login";
// import Register from "../RegisterLoginLogout/Register";

// class RegisterLogin extends Component {
//   render() {
//     const { t } = this.props;
//     return (
//       <div className="service">
//           <div> <Register/></div>
//           <div> <Login/></div>
//       </div>
//     )
//   }
// }

// export default withNamespaces()(RegisterLogin);


//https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede

import React, { Component } from 'react';
import i18n from '../i18n';
import Login from './Login';
import Register from './Register';
class Loginscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
                  loginscreen:loginscreen,
                  loginmessage:loginmessage
                    })
  }

  handleClick(event){
    // console.log("event",event);
    var loginmessage;
    if(this.state.isLogin){
      var loginscreen=[];
      loginscreen.push(<Register parentContext={this}/>);
      loginmessage = "Already registered.Go to Login";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Login",
                     isLogin:false
                   })
    }
    else{
      var loginscreen=[];
      loginscreen.push(<Login parentContext={this}/>);
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Register",
                     isLogin:true
                   })
    }
  }
  render() {   
    return (
      <div>
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <div>
            <div>
            <input
              type="submit"
              onClick={(event) => this.handleClick(event)}
              value= {this.state.buttonLabel}
             />             
           </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loginscreen;