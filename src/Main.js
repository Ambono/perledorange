import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";
import Home from "./Home";
import MyPage from "./registerloginlogout/MyPage"
import Services from "./Services";
import Contact from "./Contact";
import Menue from "./Menue";
import References from "./References";
import Booking from "./Booking";

import Loginscreen from "./registerloginlogout/LoginScreen";
import Blog from "./blog/Blog";
import { withNamespaces } from "react-i18next";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'
//import 'bootstrap/dist/css/bootstrap.min.css';
import RetrieveMyMessages from "./messages/RetrieveMyMessages";
import CreateBlog from "./blog/CreateBlog";


//https://dev.to/ksushiva/how-to-translate-your-react-js-app-with-i18next-12mn

//https://react-bootstrap.github.io

class Main extends Component {
  render() {
    const { t } = this.props;
   
    return (
      <HashRouter>
        <div
          style={{ padding: "10px 20px", textAlign: "center", color: "purple" }}
        >

{/* <Nav >
      <Nav.Item>
      <NavLink to="/Home">{t("navbar.home")}</NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/services">{t("navbar.services")}</NavLink>       
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/menue">{t("navbar.menue")}</NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/blog">{t("navbar.blob")}</NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/contact">{t("navbar.contact")}</NavLink>
      </Nav.Item>
     
      <Dropdown >
  <Dropdown.Toggle >My account</Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item>Login</Dropdown.Item>
  </Dropdown.Menu>
  <Dropdown.Menu>
    <Dropdown.Item>Register</Dropdown.Item>
  </Dropdown.Menu>
  <Dropdown.Menu>
    <Dropdown.Item>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    </Nav>
    */}
          <ul className="header" >
            <li>
              <NavLink to="/home">{t("navbar.home")}</NavLink>
            </li>
            <li>
              <NavLink to="/services">{t("navbar.services")}</NavLink>
            </li>
            <li>
              <NavLink to="/menue">{t("navbar.menue")}</NavLink>
            </li>
            {/* 
            <li>
              <NavLink to="/reference">{t("navbar.references")}</NavLink>
            </li> 
            <li>
              <NavLink to="/booking">{t("navbar.booking")}</NavLink>
            </li> 
            
            <li>
              <NavLink to="/login">{t("navbar.login")}</NavLink>            
            </li>
*/}
           

            <li>
              <NavLink to="/loginscreen">{t("navbar.login")}</NavLink>            
            </li>

            <li>
              <NavLink to="/blog">{t("navbar.blob")}</NavLink>
            </li>
            <li>
              <NavLink to="/contact">{t("navbar.contact")}</NavLink>
            </li>
          
          </ul>
     
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/menue" component={Menue} />
            <Route path="/reference" component={References} />
            <Route path="/booking" component={Booking} />
            <Route path="/blog" component={Blog} />
            <Route path="/loginscreen" component={Loginscreen} />
            <Route path="/contact" component={Contact} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/mymessages" component={RetrieveMyMessages} />
              <Route path="/updateblog" component={CreateBlog} />
          </div>
        </div>

      </HashRouter>
    );
  }
}

export default withNamespaces()(Main);
