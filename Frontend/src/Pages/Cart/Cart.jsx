import React, { useEffect } from "react";
import "../../Styles/Cart.scss";
import { Link } from "react-router-dom";
import { Navbar } from "../../Components/Navbar";
import CartCard, { calcprice } from "./CartCard";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../Redux/Cart/cart.action";
import Loader from "../../Components/Loader/Loader";

function Cart() {
let pricetotal=0

  const dispatch = useDispatch();
  const { isLoading, isError, cart } = useSelector((store) => {
    return store.CartReducer;
  });
  console.log(cart)

  useEffect(() => {
    dispatch(getCart("https://back-ened-bolt.onrender.com/cartProducts"));
    

  }, []);
  for (let i = 0; i < cart.length; i++) {
      
    pricetotal+=calcprice(cart[i].price)
  }
  localStorage.setItem("payment_total",pricetotal)

 console.log(pricetotal)
  return (
    <div>
      <Navbar />
      {isLoading && <Loader />}
      <div className="cart" id="cart">
        <div className="cart_main">
          <div className="heading_cart">
            <h1>Your bag total is ₹{pricetotal} or ₹{pricetotal*0.15} per month</h1>
            <button className="cartbutton">CheckOut</button>
          </div>
          {cart.length > 0 &&
            cart.map((item) => (
              // console.log(item)
              <CartCard item={item} />
            ))}
          <div className="billing_section">
            <div className="subtotal">
              <p>Subtotal</p>
              <p>₹{pricetotal}</p>
            </div>
            <div className="shippingfree">
              <p>Shipping</p>
              <p>FREE</p>
            </div>
            <div className="amounttotal">
              <h3>Total</h3>
              <p>₹{pricetotal}</p>
            </div>
            <div className="emiamount">
              <h4>Monthly payment</h4>
              <p>₹{pricetotal*0.15} per month with EMI</p>
            </div>
            <div className="checkout_page_button">
              <Link to="/shipping">
                <button >BUY NOW</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
