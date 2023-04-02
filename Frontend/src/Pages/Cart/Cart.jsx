import React, { useEffect } from "react";
import "../../Styles/Cart.scss";
import{Link} from "react-router-dom"
import { Navbar } from "../../Components/Navbar";
import CartCard from "./CartCard";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../Redux/Cart/cart.action";
import Loader from "../../Components/Loader/Loader";


function Cart() {
  const dispatch=useDispatch()
  const {isLoading,isError,cart}=useSelector((store)=>{
    return store.CartReducer
  })
// console.log(store)

    useEffect(() => {

    dispatch(getCart("https://back-ened-bolt.onrender.com/cartProducts"))
    
    }, [])
    

  return (
   <div>
    <Navbar/>
    {isLoading&&<Loader/>}
     <div className="cart" id="cart">
      <div className="cart_main">
        <div className="heading_cart">
          <h1>Your bag total is ₹175800.00 or ₹29300.00/mo.per month</h1>
          <button className="cartbutton">CheckOut</button>
        </div>
     {cart.length>0&&cart.map((item)=>(
      // console.log(item)
        <CartCard
        item={item}
        />
     ))

     }
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
