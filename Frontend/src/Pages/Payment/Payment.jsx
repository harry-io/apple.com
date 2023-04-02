import React, { useState } from "react";
import "../../Styles/Payment.scss";
import { Link } from "react-router-dom";
import { Navbar } from "../../Components/Navbar";


const address = JSON.parse(localStorage.getItem("shipping")) || {
  address1: "",
  address2: "",
  city: "",
  pincode: "",
  statename: "",
  country: "",
};




function Payment() {
  const [card, setCards] = useState("none");
  const [netbanking, setNetbanking] = useState("none");
  const [emi, setEmi] = useState("none");
  const [popup, setPopup] = useState("none");
  const [pay, setPay] = useState("block");
  const [otpshow, setOtp] = useState("none");
  const [hidebutton, setHidebutton] = useState("block");
  const [home, setHome] = useState("none");
  const handleOTP = () => {
    setOtp("grid");
    setHidebutton("none");
  };

  const handledisplaycard = () => {
    setCards("block");
    setNetbanking("none");
    setEmi("none");
  };
  const handledisplaynet = () => {
    setCards("none");
    setNetbanking("block");
    setEmi("none");
  };
  const handledisplayemi = () => {
    setCards("none");
    setNetbanking("none");
    setEmi("block");
  };
  const handleDetails = () => {
    setPopup("block");
    setPay("none");
  };
  const closepopup = () => {
    setPopup("none");
    setPay("block");
  };

  return (
    <div>
      <Navbar />
      <div className="payment" id="payment">
        <div style={{ display: pay }} id="abc" className="abc">
          <div className="header">
            <div>
              <h2>Checkout</h2>
            </div>
            <div>
              <h3 onClick={handleDetails}>₹269800.00</h3>
            </div>
          </div>
          <div className="method">
            <div className="lead">
              <h1>How do you want to pay?</h1>
            </div>
            <div className="payinfull">
              <div className="payinfull_heading">
                <h4>Pay in full.</h4>
              </div>
              <div className="collection">
                <button onClick={handledisplaycard} className="card">
                  <h3>Credit or Debit Card</h3>
                  <p>Visa, Mastercard, AMEX, Discover, Diners Club, RuPay</p>
                </button>
                <div style={{ display: card }} className="atm">
                  <div className="atm_main">
                    <div className="atm_main_heading">
                      <p>Enter your card information</p>
                    </div>
                    <div className="atm_inp">
                      <div className="card_number">
                        <input type="number" placeholder="Card number" />
                      </div>
                      <div className="exp_cvv">
                        <input
                          type="text"
                          placeholder="Expiration MM/YY"
                          required
                        />
                        <input type="text" placeholder="CVV" required />
                      </div>
                    </div>
                  </div>
                  <div className="billing">
                    <div className="billing_main">
                      <div className="billing_heading">
                        <h4>Billing address</h4>
                      </div>
                      <div className="address">
                        <span>
                          {" "}
                          <input type="checkbox" name="" id="" required />
                          use my billing address
                        </span>
                        <br />
                        <span>
                          <b>
                            {address.address1},{address.address2}
                          </b>
                          <b>{address.city}</b>
                          <b>{address.pincode}</b>
                          <b>{address.statename}</b>
                          <b>{address.country}</b>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={handledisplaynet} className="netbanking">
                  <h3>Net Banking</h3>
                </button>
                <div style={{ display: netbanking }} className="logos">
                  <div className="banks">
                    <div>
                      <img
                        src="https://onemg.gumlet.io/image/upload/m56yb9uqxdypc7hdrn4a.png"
                        alt=""
                      />
                      <p>ICICI</p>
                    </div>
                    <div>
                      <img
                        src="https://onemg.gumlet.io/marketing/ef67d9dc-6d6d-478b-8fcf-6b42f730852d.png"
                        alt=""
                      />
                      <p>HDFC</p>
                    </div>
                    <div>
                      <img
                        src="https://res.cloudinary.com/du8msdgbj/image/upload/v1529400496/marketing/p1pmddrmfgus2qiuznm1.png"
                        alt=""
                      />
                      <p>AXIS</p>
                    </div>
                    <div>
                      <img
                        src="https://onemg.gumlet.io/marketing/0104bc4f-ac20-448c-8862-44d3d7a60658.png"
                        alt=""
                      />
                      <p>KOTAK</p>
                    </div>
                    <div>
                      <img
                        src="https://onemg.gumlet.io/marketing/46eba1af-8537-4b6d-95f0-bf81cfcb90a1.png"
                        alt=""
                      />
                      <p>SBI</p>
                    </div>
                  </div>
                  <div className="additional_banks">
                    <select name="" id="">
                      Additional Banks
                      <option value=""> Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                      <option value="">Additional Banks</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="Payovertime">
              <div className="Payovertime_heading">
                <h3>Pay over time.</h3>
                <p>See all available EMI and No Cost EMI§ options</p>
              </div>
              <button onClick={handledisplayemi} className="Payovertime_card">
                <h3>Credit Card EMI</h3>
              </button>
              <div style={{ display: emi }} className="atm">
                <div className="atm_main">
                  <div className="atm_main_heading">
                    <p>Enter your card information</p>
                  </div>
                  <div className="atm_inp">
                    <div className="card_number">
                      <input type="number" placeholder="Card number" />
                    </div>
                    <div className="exp_cvv">
                      <input
                        type="text"
                        placeholder="Expiration MM/YY"
                        required
                      />
                      <input type="text" placeholder="CVV" required />
                    </div>
                  </div>
                </div>
                <div className="billing">
                  <div className="billing_main">
                    <div className="billing_heading">
                      <p>Billing address</p>
                    </div>
                    <div className="address">
                      <span>
                        {" "}
                        <input type="checkbox" name="" id="" required />
                        use my billing address
                      </span>
                      <br />
                      <span>
                        <b>
                          {address.address1},{address.address2}
                        </b>
                        <b>{address.city}</b>
                        <b>{address.pincode}</b>
                        <b>{address.statename}</b>
                        <b>{address.country}</b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pan">
            <div>Enter your Tax information</div>
            <div className="pan_input">
              <div>
                <input type="text" placeholder="Enter PAN number" required />
              </div>
              <div>
                <p style={{ padding: "0 20px" }}>
                  {" "}
                  A Permanent Account Number is required for orders of ₹200000
                  or more. It will be included on your electronic receipt for
                  tax purposes.
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  If you are buying for a business, please note that Apple
                  cannot add a Business GST number to your invoice. You will
                  receive a consumer invoice.
                </p>
              </div>
            </div>
          </div>

          <div className="review_button">
            <button style={{ display: hidebutton }} onClick={handleOTP}>
              Review Your Order
            </button>
            <form
              onSubmit={(e) => {
                e.preventDefault();

                setHome("flex");
              }}
              className="otpset"
              style={{ display: otpshow }}
            >
              <label>
                OTP has been sent to your mobile {address.phone},please Enter
                the otp
              </label>
              <input type="number" placeholder="Enter your OTP" required />
              <input type="submit" value="Submit" />
            </form>
            <div style={{ display: home }} className="ordersuccess">
              <div className="ordersuccesspopup">
                <h1>
                  ✅ Your order has been confirmed <span>🎉</span>
                </h1>

                <div>
                  <div>
                    <h4> iPhone 14 Pro</h4>
                    <h4>₹ 189,900</h4>
                    <h4>
                      {address.address1},{address.address2}
                      {address.city}
                      {address.pincode}
                      {address.statename}
                      {address.country}
                    </h4>
                  </div>
                  <div className="imgbox">
                    <img
                      src="https://img5.gadgetsnow.com/gd/images/products/additional/large/G390874_View_1/mobiles/smartphones/apple-iphone-14-pro-max-1-tb-deep-purple-6-gb-ram-.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <Link to="/">
                  <button>Continue Shopping</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="chat">
            <p>
              Need Some help?<a href="#">Chat now</a> or call 401966
            </p>
          </div>

          <div>
            <div className="faq">
              <h3>FAQ for Payment</h3>
              <h3>^</h3>
            </div>
          </div>
          <div className="footerDesc">
            <div>
              <p>
                ◊ Monthly pricing is after purchase using EMI with qualifying
                cards at 14% pa over a 6 month tenure. Monthly pricing is
                rounded to the nearest rupee. Exact pricing will be provided by
                your bank, subject to your bank’s terms and conditions.
              </p>
            </div>
            <div>
              <p>Representative example:</p>
              <p>
                Based on purchase of ₹79900. Total amount payable ₹83194 paid
                over 6 months as 6 monthly payments of ₹13866 at an interest
                rate of 14% pa. Total interest paid to bank: ₹3294.
              </p>
              <p>
                § No Cost EMI is available with the purchase of an eligible
                product made using qualifying cards on 3- or 6-month tenures
                from most leading banks. Minimum order spend applies as per your
                card issuing bank threshold. Offer cannot be combined with Apple
                Store for Education or Corporate Employee Purchase Plan pricing.
                Card eligibility is subject to terms and conditions between you
                and your card–issuing bank. Offer may be revised or withdrawn at
                any time without any prior notice. Terms & Conditions apply.
              </p>
            </div>
            <div>
              <p>Representative example:</p>
              <p>
                Based off a 6 month tenure. ₹79900 total cost includes 15% pa
                and No Cost EMI savings of ₹3380, paid over 6 months as 6
                monthly payments of ₹13317.
              </p>
              <p>
                1. Trade-in values will vary based on the condition, year, and
                configuration of your eligible trade-in device. Not all devices
                are eligible for credit. You must be at least 18 years old to be
                eligible to trade in for credit or for an Apple Gift Card.
                Trade-in value may be applied toward qualifying new device
                purchase, or added to an Apple Gift Card. Actual value awarded
                is based on receipt of a qualifying device matching the
                description provided when estimate was made. Sales tax may be
                assessed on full value of a new device purchase. In-store
                trade-in requires presentation of a valid photo ID (local law
                may require saving this information). Offer may not be available
                in all stores, and may vary between in-store and online
                trade-in. Some stores may have additional requirements. Apple or
                its trade-in partners reserve the right to refuse or limit
                quantity of any trade-in transaction for any reason. More
                details are available from Apple’s trade-in partner for trade-in
                and recycling of eligible devices. Restrictions and limitations
                may apply.
              </p>
              <p>
                2. Special pricing available to qualified customers. To learn
                more about how to start qualifying for special pricing, talk to
                an Apple Specialist in a store or give us a call on 000800 040
                1966.
              </p>
            </div>
            <div>
              <p>
                Apple uses industry-standard encryption to protect the
                confidentiality of your personal information.
              </p>
            </div>
          </div>
        </div>
        <div className="popup" style={{ display: popup }}>
          <div className="closepopup" onClick={closepopup}>
            ❌
          </div>
          <div className="ordertotal">
            <h2>Your Order Total</h2>
          </div>
          <div className="editbag">
            <h3>1 item</h3>
            <a href="#">Edit bag</a>
          </div>
          <div className="subtotal">
            <p>Subtotal</p>
            <p>₹269800.00</p>
          </div>
          <div className="shipping">
            <p>Shipping</p>
            <p>FREE</p>
          </div>
          <div className="totalprice">
            <h3>Total</h3>
            <p>₹269800.00</p>
          </div>
          <div className="orderDetails">
            <h2>Your Order Details</h2>
          </div>
          <div className="deliverson">
            <h3>
              Delivers on: <br />
              Sat 8 april
            </h3>
            <a href="#">Change</a>
          </div>
          <div className="deliversto">
            <h4>
              Delivery to: <br />{" "}
              <span>
                <b>
                  {address.address1},{address.address2}
                </b>
                <b>{address.city}</b>
                <b>{address.pincode}</b>
                <b>{address.statename}</b>
                <b>{address.country}</b>
              </span>
            </h4>
            <Link to="/shipping">Change</Link>
          </div>
          <div className="paymentchange">
            <h3>Payment</h3>
            <Link to="/payment">Change</Link>
          </div>
          <div className="review">
            <a href="#">
              <h3>Review</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
