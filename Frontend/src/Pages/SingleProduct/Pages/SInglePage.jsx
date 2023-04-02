import React, { useEffect, useState } from "react";
import { Navbar } from "../../../Components/Navbar";
import "../Style/Mac.css";
import { Footer } from "../../../Components/Footer";
import {  useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SimpleSlider from "./SimpleSlider";
import Loader from "../../../Components/Loader/Loader";
import { getSingleProduct } from "../../../Redux/SingleProduct/Single.actionType";
import { addCart } from "../../../Redux/Cart/cart.action";




function SinglePage() {

  const {id} = useParams()

  useEffect(()=>{
    dispatch(getSingleProduct(id))
  },[])

  const {isLoading, isError, product} = useSelector((store) =>store.singleProductReducer)
  const dispatch = useDispatch()
  

     
   const {title ,category,dtlimage,price} = product

   const handleaddcart = () => {
dispatch(addCart("https://back-ened-bolt.onrender.com/cartProducts/add",product))
   };
   

  return (
    <div className="main-mac">
    <Navbar />
    <div>
      <div>
        <h1>Choose your new {category&&category}.</h1>
      </div>
      <hr></hr>
      <div className="mac-parent-container">
        <div>
          <div className="container-Mac">
            <div>
             {isLoading && <Loader/>}
              {dtlimage&&<SimpleSlider dtlimage={dtlimage}/>}
            </div>
            <div>
              <div className="desc-mac">
                <div>
                  <h3>{title&&title}</h3>
                  <p>
                    {price&&price}
                  </p>
                </div>
                <div>
                  <button onClick={handleaddcart}>Add To Bag</button>
                </div>
              </div>
              <div className="mac-specs">
                <div>
                  <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-icon-battery-202209?wid=56&hei=56&fmt=jpeg&qlt=95&.v=1660759995596" />
                  <h4>
                    Up to 18 hours of battery life so you can go longer than
                    everFootnote1
                  </h4>
                </div>
                <hr></hr>
                <div>
                  <img src="https://www.apple.com/v/mac/home/bs/images/overview/compare/compare_icon_unified_memory__emykppauav2a_large.png" />
                  <h4>
                    Up to 18 hours of battery life so you can go longer than
                    everFootnote1
                  </h4>
                </div>
                <hr></hr>
                <div>
                  <img src="https://www.apple.com/v/mac/home/bs/images/overview/compare/compare_icon_mic__bkm7awuvc5qu_large.png" />
                  <h4>
                    Up to 18 hours of battery life so you can go longer than
                    everFootnote1
                  </h4>
                </div>
                <hr></hr>
                <div>
                  <img src="https://www.apple.com/v/mac/home/bs/images/overview/compare/compare_icon_imac24_keyboard__dgffd78l4dsi_large.png" />
                  <h4>
                    Up to 18 hours of battery life so you can go longer than
                    everFootnote1
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dilevary-desc">
          <div>
            <h4>Apple Card Monthly Installments</h4>
            <p>
              Pay over time, interest-free when you choose to check out with
              Apple Card Monthly Installments.◊
            </p>
          </div>
          <div>
            <h4>Trade in for credit</h4>
            <p>
              Get credit toward your purchase when you trade in an eligible
              Mac.**
            </p>
          </div>
          <div>
            <h4>Free delivery</h4>
            <p>And free returns. See checkout for delivery dates.</p>
          </div>
        </div>
      </div>
      <div className="mac-care">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/applecare-hero-bb-201706?wid=152&hei=152&fmt=jpeg&qlt=95&.v=1629955311000"/>
            <h1>AppleCare+ for {category}</h1>
            <h4>
            Every Mac comes with a one-year limited warranty(opens in a new window) and up to 90 days of complimentary technical support(opens in a new window). AppleCare+ for Mac extends your coverage from your AppleCare+ purchase date and adds unlimited incidents of accidental damage protection, each subject to a service fee of $99 for screen damage or external enclosure damage, or $299 for other accidental damage, plus applicable tax. In addition, you’ll get 24/7 priority access to Apple experts via chat or phone. For complete details, see the terms(opens in a new window). 
            </h4>
        </div>
    </div>
      <Footer/>
    </div>
  )
}


export default SinglePage;
