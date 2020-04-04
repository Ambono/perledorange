import React, { Component } from "react";
import './index.css';
import DEBIT from './payment/debit';
import BILLINGADDRESS from './payment/billingaddress';
import ITEMS from './checkout/items';

class Booking extends Component {
  render() {
    return (
      <div class="row ">
      <div class="col-75">
      <div class="booking">
      <form action="/action_page.php">    
      <div class="row">
         <BILLINGADDRESS/> 
        <div class="col-50">
          <div class="col-25">
         <DEBIT/>
         </div>
        </div>              
       
        <div class="col-50">
        <ITEMS/>
         </div>    

        </div>  
        <input type="submit" value="Continue to checkout" class="btn"/>      
         </form>    
          <div class="col-25">    
           </div>
        </div>
        </div>
        </div>
    
    );
  }
}
 
export default Booking;