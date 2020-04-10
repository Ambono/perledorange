import React from "react";
import axios from "axios";
import { withNamespaces } from "react-i18next";

 class RetrieveMyMessages extends React.Component {
  state = {
    messages: []
  };

  componentDidMount(e) {
    // axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
    //   console.log(res);
    //   this.setState({ persons: res.data });
    // });
    this.handleSubmit(e);
  }


  
  handleSubmit = (e) => {
    const BASE_URL = "http://localhost:50/perledorange/serverperledorange";
    const API_PATH = BASE_URL + "/messages/retrievecontactmessages.php";
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
          this.setState({ messages: result.data });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  render() {
    return <ul>{this.state.messages.map(message => <li key ={message.id}>{message.Date}{message.Email}{message.LastName}{message.FirstName}{message.Phone}{message.Subject}</li>)}</ul>;
  }
}

export default withNamespaces()(RetrieveMyMessages);