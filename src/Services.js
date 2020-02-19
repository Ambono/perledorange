import React, { Component } from "react";
import img1 from './img/Rotaryclubprizegarch.PNG'; 
import img2 from './img/tartardavocat.PNG'; 
class Services extends Component {
  render() {
    return (
      <div>
       <h1>Mes services</h1> 
       <h2>Le metier de chef à domicile,
pourquoi travailler avec un chef ?</h2>
<p>
Le service que je propose vous permet de recevoir vos convives à travers l’organisation d’un repas de qualité, cela vous libérera de toute contrainte et vous permettra de profiter de vos invités et de votre évènement en toute sérénité.
</p>
<p>
Le service de chef à domicile est un service particulier qui se veut de qualité et qui répond à un besoin.
</p>
<p>
Si vous souhaitez passer une bonne soirée avec votre conjoint, organiser un repas familial, déléguer l’organisation d’un repas d’affaire ou bien déléguer la gestion d’un évènement 2 à 20 personnes. C’est un chef indépendant qu’il vous faut, c’est Vanessa Bonogo qu’il vous faut 😀 !
</p>
<div><img src={img1} alt="prizerotaryclub" /><img src={img2} alt="tartar" /></div>


Mon service consiste à vous apporter toute l’assurance et la qualité liées à l’organisation de votre évènement.

<h2>Mes services</h2>
Lorsque vous decidez de déléguer l’organisation d’un évènement, c’est une confiance que vous accordez:
<p>Organisation d’évènement:</p>     
        <ol>
          <li>Analyse de votre évènement</li>
          <li>Proposition de menus</li>
          <li>Préparation des plats</li>
          <li>Dressage de la table</li>
          <li>Service</li>
          <li>Remise en état de votre lieu de vie</li>         
        </ol>
<p>Me déléguer votre évènement c’est profiter de votre instant en toute sérénité</p>      
      </div>
    );
  }
}
 
export default Services;