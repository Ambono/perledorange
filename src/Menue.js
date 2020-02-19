import React, { Component } from "react";
import Entree from './dishes/entrees';
import Plat from './dishes/plats';
import Dessert from './dishes/desserts';
import Vanessa from './vanessa/vanessa';
 
class Menue extends Component {
  render() {
    return (
      <div>     
     <Entree/> 
     <Plat/> 
     <Dessert/>
      </div>
    );
  }
}
 
export default Menue;