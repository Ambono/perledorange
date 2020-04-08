import React, { Component } from "react";
import dessert1 from '../img/dessert1.PNG'; 
import { withNamespaces } from "react-i18next";
 
class Dessert extends Component {
  render() {
    const { t } = this.props;
    return (
      <div class ="dishes" style={{ padding: "10px 20px",  margin:"25px", textAlign: "center", color: "purple"}}>
      <div>
      {t("pages.desserts.text.header1")} 
        <div>
          <div style={{ padding: "10px 20px", textAlign: "center", color: "white"}}>
          <img src={dessert1} alt="dessert1" /> 
          </div>
   
         
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
 
export default withNamespaces()( Dessert);