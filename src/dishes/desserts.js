import React, { Component } from "react";
import dessert1 from '../img/dessert1.PNG'; 
 
class Dessert extends Component {
  render() {
    return (
      <div>
      <div>
            LES DESSERTS
        <div>
        <img src={dessert1} alt="dessert1" /> 
         
         <div>
-pavlova au fruits exotiques
-crème au fruit de la passion
-moelleux à l’orange poelé au beurre salée et boule de glace vanille
-croustillant aux fruits secs et sa boule de glace
-douillon poire et sauce pistache
-tarte tatin et sa crème
-crème au chocolat
-banane flambé au rhum
-Chausson d’ananas au croquant de nougatine et son coulis 	-crème brulée au bourbon de vanille
-panna cotta aux fruits frais
-salade de pamplemousse et son petit gateau
-ile flottante
-panna cotta et son coulis de fruit
-profiteroles au chocolat
      </div>
       </div>
      </div>
      </div>
    );
  }
}
 
export default Dessert;