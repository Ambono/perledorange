import React, { Component } from "react";
import plat1 from '../img/plat1.PNG'; 
import { withNamespaces } from "react-i18next";

class Plats extends Component {
  render() {
    const { t } = this.props;
    return (
      <div class ="dishes" style={{ }}>
        <div>
        {t("pages.plats.text.header1")}  
        <div>
        <div style={{ padding: "10px 20px", textAlign: "center", color: "white"}}>
        <img src={plat1} alt="plat1" /> 
          </div>   
       
         
         <div>
         -Velouté de chataigne et fricassés de coquilles saint jacques
-risotto de langoustine et safran
-duo de céleri et patate douce au coulis de poivron et gambas poelé
-Saumon fondue de  poireaux sauce vert de poireaux
-hamburger maison
-sole meunière légumes tournés
-bar poêlé et ses legumes
-saint pierre et carotte fondante au citron confit-tajine de lotte
-poulet curry à la mangue et riz
-magret de canard en éventail au miel gingembre et pommes de terre sautées
-suprême de poulet sauce airelle
-filet de porc aux morilles et crémeux de carotte
-noix de ris de veau et purée de pomme de terre
-agneau aux abricots secs et pistache.
      </div>
       </div>
      </div>
      </div>
    );
  }
}
 
export default withNamespaces()(Plats);