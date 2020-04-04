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
import Footer from "./Footer";
//import i18n from './i18n';
//import { withTranslation } from 'react-i18next';

//https://dev.to/ksushiva/how-to-translate-your-react-js-app-with-i18next-12mn


class Main extends Component {
  render() {
   // const { t } = withTranslation ();
    return (
      <HashRouter>
        <div>
          
          <h1>Perledorange</h1>
         
           <ul className="header">
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/menue">Menue</NavLink>
            </li>
            <li>
              <NavLink to="/reference">References</NavLink>
            </li>
            <li>
              <NavLink to="/booking">Booking</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
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
          <Footer />
        </div>
      </HashRouter>  
    );
  }
}

export default  Main;
