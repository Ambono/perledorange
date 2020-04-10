import React, { Component } from "react";
import entree1 from '../img/entree1.PNG'; 
import { withNamespaces } from "react-i18next";

class Entrees extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className ="dishes" >
           {t("pages.entrees.text.header1")} 
        <div>
        <div>
        <img src={entree1} alt="entree1" /> 
          </div>       
         
         <div>
-crumble de tomate{'\n'}
-boulette de boeuf  hachée à la menthe sur  salade de concombre{'\n'}
-pressée de légumes du soleil sauce pistou{"\n"}
-mozza et poivron mariné à l’ail{"\n"}
-caviar d’aubergine{"\n"}
-soupe de melon et jambon de {"\n"}
-salade thai à ma façon{"\n"}
-crevettes poêlées sauce soja gingembre{"\n"}
-foie gras et chutney d’abricot sec{"\n"}
-samoussa d’agneau au fruits secs{"\n"}
-carpaccio de coquilles saint-jacques mariné à l’echalotte  et au citron vert	-tartare d’avocat et carpaccio de langoustine, vinaigrette fraiche à la mangue{"\n"}
-fricassée de bulots sur lit de mesclun{"\n"}
-feuilleté de crabe{"\n"}
-gaspacho betterave{"\n"}
      </div>
       </div>
      </div>
    );
  }
}
 
export default withNamespaces()(Entrees);