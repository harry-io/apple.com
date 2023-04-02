import React, { useState } from "react";
import "../../Styles/Cart.scss";
import { useDispatch } from "react-redux";
import { IncCart, deleteCart } from "../../Redux/Cart/cart.action";


export const calcprice = (mrp) => {
  const dplitPrice = (str) => {
    let newStr = "";
    for (let i = 1; i < str.length; i++) {
      newStr += str[i];
    }
    return newStr;
  };
  let fullprice = mrp.split(" ");
  let price = fullprice[fullprice.length - 1];
  price = +dplitPrice(price);

 
  return price;
};

function CartCard({ item }) {
  const dispatch = useDispatch();

  const [add, setAdd] = useState(1);

  const removeitem = (id) => {
    dispatch(
      deleteCart(`https://back-ened-bolt.onrender.com/cartProducts/${id}`)
    );
  };
  //   let body1={
  //     quantity:item.quantity+1
  //   }
  //   let body2={
  //     quantity:item.quantity-1
  //   }
  //   const handleAdd=(id)=>{
  // dispatch(IncCart(`https://back-ened-bolt.onrender.com/cartProducts/${id}`,body1))
  //   }
  //   const handleSub=(id)=>{
  //     dispatch(IncCart(`https://back-ened-bolt.onrender.com/cartProducts/${id}`,body2))
  //       }

  const handleAdd = (id) => {
    setAdd(add + 1);
    localStorage.setItem("quantity_bolt", add);
  };
  const handleSub = (id) => {
    setAdd(add - 1);
    localStorage.setItem("quantity_bolt", add);
  };

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
            <div className="quantity">
              <button
                disabled={add == 1}
                onClick={(item) => handleSub(item._id)}
              >
                -
              </button>
              <button>{add}</button>
              <button onClick={(item) => handleAdd(item._id)}>+</button>
            </div>
            <div>
              <p>₹{calcprice(item.price)}</p>
            </div>
          </div>

          <div className="right3">
            <div className="abu">
              <p>{item.price}</p>
              <button onClick={() => removeitem(item._id)}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
