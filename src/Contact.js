import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div className="App">
    <p>Contact Me</p>
    <div>
    <form action="/action_page.php">
    <label>First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
    <br/>
    <label>Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

    <br/>
    <label>Email</label>
    <input type="email" id="email" name="email" placeholder="Your email" />
    <br/>

    <label>Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
    <br/>
    <input type="submit" value="Submit" />
    </form>
    </div>
    </div>
    );
  }
}


export default Contact;
