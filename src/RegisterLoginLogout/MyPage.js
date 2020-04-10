import React, { Component } from "react";
import { withNamespaces } from 'react-i18next';
import { Route, NavLink, HashRouter } from "react-router-dom";
import RetrieveMyMessages from "../Messages/RetrieveMyMessages";
import CreateBlog from "../Blog/CreateBlog";

  

class MyPage extends Component {

constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
   // const { t } = this.props;
    return (
      <HashRouter >
      <div className="contact">
      <div id="contact_content">
            <h1>I am on my page</h1>
            <ul >
              <li>
                <NavLink to="/mymessages">My message</NavLink>
              </li>
              <li>
                <NavLink to="/updateblog">Update My Blogs</NavLink>
              </li> 
            </ul>
            <div>
              <Route path="/mymessages" component={RetrieveMyMessages} />
              <Route path="/updateblog" component={CreateBlog} />
            </div>
            </div>
          </div>
          </HashRouter>
      );    
  }
}

export default withNamespaces()(MyPage);




