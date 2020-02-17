import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Services from "./Stuff";
import Contact from "./Contact";
import Menue from "./Home";
import References from "./Stuff";
import Blog from "./Contact";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">              
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/menue">Menue</NavLink></li>
            <li><NavLink to="/reference">References</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>  
            <li><NavLink to="/contact">Contact</NavLink></li>          
            </ul>
          <div className="content">

          <Route exact path="/" component={Home}/>
            <Route path="/services" component={Services}/>
            <Route path="/menue" component={Menue}/>
            <Route path="/reference" component={References}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
             
          </div>
        </div>
      </HashRouter>
        // <div>
        //   <h1>Simple SPA</h1>
        //   <ul className="header">
        //     <li><a href="/">Home</a></li>
        //     <li><a href="/stuff">Stuff</a></li>
        //     <li><a href="/contact">Contact</a></li>
        //   </ul>
        //   <div className="content">
             
        //   </div>
        // </div>
    );
  }
}
 
export default Main;