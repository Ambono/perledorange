import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import Menue from "./Menue";
import References from "./References";
import Booking from "./Booking";
import Login from "./Login";
import Blog from "./Blog";
import { withNamespaces } from "react-i18next";

//https://dev.to/ksushiva/how-to-translate-your-react-js-app-with-i18next-12mn

class Main extends Component {
  render() {
    const { t } = this.props;

    return (
      
      <HashRouter>
        <div
          style={{ padding: "10px 20px", textAlign: "center", color: "purple" }}
        >
          <ul className="header">
            <li>
              <NavLink to="/Home">{t("navbar.home")}</NavLink>
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
            </li> */}

            <li>
              <NavLink to="/blog">{t("navbar.blob")}</NavLink>
            </li>
            <li>
              <NavLink to="/contact">{t("navbar.contact")}</NavLink>
            </li>
          </ul>

          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/menue" component={Menue} />
            <Route path="/reference" component={References} />
            <Route path="/booking" component={Booking} />
            <Route path="/blog" component={Blog} />
            <Route path="/login" component={Login} />
            <Route path="/contact" component={Contact} />
          </div>          
        </div>
      </HashRouter>
    );
  }
}

export default withNamespaces()(Main);
