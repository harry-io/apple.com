import React from "react";
import "../../Styles/Cart.scss";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../Redux/Cart/cart.action";

const dplitPrice = (str) => {
  let newStr = "";
  for (let i = 1; i < str.length; i++) {
    newStr += str[i];
  }
  return newStr;
};

function CartCard({ item }) {
    const dispatch=useDispatch()
  let fullprice = item.price.split(" ");
  let price = fullprice[fullprice.length - 1];
  price = +dplitPrice(price);
  // console.log(typeof(price))
  // price=price.splice(0)
  console.log(price);

  const removeitem=(id)=>{
    dispatch(deleteCart(`https://back-ened-bolt.onrender.com/cartProducts/${id}`))
    
  }

  return (
    <div className="product_data_main">
      <div className="product_data">
        <div className="left_image">
          <img src={item.image} alt="" />
        </div>

        <div className="right1">
          <div>
            <h3> {item.title}</h3>
          </div>
          <div>
            <p>{}</p>
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
            <div>
              <p>{price}</p>
            </div>
          </div>

          <div className="right3">
            <div>
              <p>{item.price}</p>
              <b onClick={()=>removeitem(item._id)}>Remove</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
