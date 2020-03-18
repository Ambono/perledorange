import React, { Component } from "react";
import axios from "axios";


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
      error: null
    };
  }

  handleFormSubmit = e => {
    const API_PATH = "http://192.168.0.21:60/messages/sendcontactmessages.php"   
   // const API_PATH ="http://192.168.0.4:60/messages/sendcontactmessages.php"   
    e.preventDefault();
    axios({     
      method: "post",
      url:  `${API_PATH}`,    
       
      data:this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        });
        console.log(result);
        console.log(this.state);
      })
      .catch(function(error) {
       //this.setState({ error: error.message })
        console.log(error);
      });
     // .catch(error => this.setState({ error: error.message }));
  };
 

  sendEmail = e => {
    //const API_PATH ="http://192.168.0.4:88/index.php"
    const API_PATH ="http://192.168.0.21:88/index.php"
    
    e.preventDefault();
    axios({     
      method: "post",
      url:  `${API_PATH}`,    
       
      data:this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        });
        console.log(result);
        console.log(this.state);
      })
      .catch(function(error) {
       //this.setState({ error: error.message })
        console.log(error);
      });
     // .catch(error => this.setState({ error: error.message }));
  };
 
  execute = e =>{
    this.handleFormSubmit(e);
    this.sendEmail(e);
  }


  render() {   
    return (
      <div className="contact">
        <p>Contact Me</p>
        <div>
        <form action="#" >
            <label>First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Your name.."
              value={this.state.fname}
              onChange={e => this.setState({ fname: e.target.value })}
            />
            <br />

            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Your last name.."
              value={this.state.lname}
              onChange={e => this.setState({ lname: e.target.value })}
            />

            <br />
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <br />

            <label>Mobile phone</label>
            <input
              type="text"
              id="number"
              name="number"
              placeholder="Your phone"
              onChange={e => this.setState({ number: e.target.value })}
              value={this.state.number}
            />
            <br />

            <label>Subject</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write something.."
              onChange={e => this.setState({ message: e.target.value })}
              value={this.state.message}
            ></textarea>
            <br />
            <input
              type="submit"
              onClick={e => this.execute(e)}
              value="Submit"
            />
            <div>
              {this.state.mailSent && <div>Thank you for contacting us. orig</div>}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
