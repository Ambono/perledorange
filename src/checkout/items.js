import React, { Component } from "react";
 
class Items extends Component {
  render() {
    return (
      <div>
      
      
      <h4>Cart
        <span class="price" >
          <i class="fa fa-shopping-cart"></i>
          <b>4</b>
        </span>
      </h4>
      <p><a href="#">Product 1</a> <span class="price">$15</span></p>
      <p><a href="#">Product 2</a> <span class="price">$5</span></p>
      <p><a href="#">Product 3</a> <span class="price">$8</span></p>
      <p><a href="#">Product 4</a> <span class="price">$2</span></p>
      <hr/>
      <p>Total <span class="price"><b>$30</b></span></p>
    </div> 
 
    );
  }
}


export default Items;
