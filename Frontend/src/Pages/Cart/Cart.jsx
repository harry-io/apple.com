import React from "react";
import "../../Styles/Cart.scss";
import{Link} from "react-router-dom"
import { Navbar } from "../../Components/Navbar";

function Cart() {
  return (
   <div>
    <Navbar/>
     <div className="cart" id="cart">
      <div className="cart_main">
        <div className="heading_cart">
          <h1>Your bag total is ₹175800.00 or ₹29300.00/mo.per month</h1>
          <button className="cartbutton">CheckOut</button>
        </div>
        <div className="product_data_main">
          <div className="product_data">
            <div className="left_image">
              <img
                src="https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/e/4/c/-original-imaghxg9hnk2bztm.jpeg?q=70"
                alt=""
              />
            </div>

            <div className="right1">
              <div>
                <h3>
                  {" "}
                  Starlight Aluminium Case with Sport Band - Starlight, 2
                </h3>
              </div>
              <div>
                <p>Pay 15% pa for 6 months</p>
              </div>
            </div>
            <div className="right_most">
              <div className="right2">
                <div>
                  <select name="" id="">
                    <option value="2">1</option>
                    <option value="2">2</option>
                    <option value="2">3</option>
                    <option value="2">4</option>
                    <option value="2">5</option>
                    <option value="2">6</option>
                    <option value="2">7</option>
                    <option value="2">8</option>
                  </select>
                </div>
                <div><p>₹45900.00</p></div>
              </div>

              <div className="right3">
                <div>
                  <p>Get up to ₹1944.00 savings with eligible card(s)</p>
                  <p>₹7650.00/mo</p>
                  <b>Remove</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="billing_section">
          <div className="subtotal">
            <p>Subtotal</p>
            <p>10000000</p>
          </div>
          <div className="shippingfree">
            <p>Shipping</p>
            <p>FREE</p>
          </div>
          <div className="amounttotal">
            <h3>Total</h3>
            <p>12000000</p>
          </div>
          <div className="emiamount">
            <h4>Monthly payment</h4>
            <p>₹29300.00/mo.^per month with EMI</p>
          </div>
          <div className="checkout_page_button">
      <Link to="/shipping">
      <button >BUY NOW</button></Link>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Cart;
