import React, { Component } from "react";
 
class Debit extends Component {
  render() {
    return (
      <div>
      <h3>Payment</h3>
      <label for="fname">Accepted Cards</label>
      <div class="icon-container">
        <i class="fa fa-cc-visa" ></i>
        <i class="fa fa-cc-amex" ></i>
        <i class="fa fa-cc-mastercard"></i>
        <i class="fa fa-cc-discover"></i>
      </div>
      <label for="cname">Name on Card</label>
      <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
      <label for="ccnum">Credit card number</label>
      <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
      <label for="expmonth">Exp Month</label>
      <input type="text" id="expmonth" name="expmonth" placeholder="September"/>

      <div class="row">
        <div class="col-50">
          <label for="expyear">Exp Year</label>
          <input type="text" id="expyear" name="expyear" placeholder="2018"/>
        </div>
        <div class="col-50">
          <label for="cvv">CVV</label>
          <input type="text" id="cvv" name="cvv" placeholder="352"/>
        </div>
      </div>

      <label>
    <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
  </label> 
  </div>
    );
  }
}


export default Debit;
