import React from "react";
import axios from "axios";
import { withNamespaces } from "react-i18next";
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem'

class RetrieveMyMessages extends React.Component {
    constructor(props) {
        super(props)
               this.state = {
                messages: []
               }
            }

  componentDidMount() {
    const BASE_URL = "http://localhost:50/perledorange/serverperledorange";
    const API_PATH = BASE_URL + "/messages/retrievecontactmessages.php";
    axios.get(API_PATH)
    .then((res) => {
      console.log(res);
      const messages = res.data;
      this.setState({ messages });
      //   this.setState({ persons: res.data });
      console.log(messages);
    });
  }


  renderMessages() {
    return this.state.products.map(message => {
        return (
            <tr>
                <td>{message.Id}</td>                
                <td>{message.FirstName}</td>
                <td>{message.Email}</td>
                <td>{message.Phone}</td>
                <td>{message.Subject}</td>
                <td>{message.Date}</td>
            </tr>
        );
    })
}



render() {
    return (
    <div className="container">
       <div className="messages_content">
       <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Subject</th>
          <th>Date</th>
         
        </tr>
        { this.state.messages.map(message => 
          <tr>           
                <td>{message.FirstName}</td>
                <td>{message.Email}</td>
                <td>{message.Phone}</td>
                <td>{message.Subject}</td>
                <td>{message.Date}</td>
           
         
            <td>
              <form onSubmit={this.handleEditSubmit}>
                  <button type="submit" value={message.Id} onClick={e => this.onEdit(e)}>Edit</button>
              </form>
               <form onSubmit={this.handleSubmit}>
                  <button type="submit" value={message.Id} onClick={e => this.onClick(e)}>Delete</button>
              </form>
              
            </td>
            </tr>
          )}
        </table>
      </div>    </div>
  );
  }

}

export default withNamespaces()(RetrieveMyMessages);
