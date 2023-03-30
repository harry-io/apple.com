import React, { useState } from "react";
import "../../Styles/Payment.scss";

function Payment() {
  const [card, setCards] = useState("none");
  const [netbanking, setNetbanking] = useState("none");
  const [emi, setEmi] = useState("none");

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
  return (
    <div className="payment" id="payment">
      <div className="header">
        <div>
          <h2>Checkout</h2>
        </div>
        <div>
          <h3>Show Order Summary: ₹269800.00</h3>
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
                    <input type="text" placeholder="Expiration MM/YY" />
                    <input type="text" placeholder="CVV" />
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
                      <input type="checkbox" name="" id="" />
                      use my billing address
                    </span>
                    <br />
                    <span>
                      5th Floor, SJR Primus, 20th Main Rd, next to Raheja
                      Arcade, 5th Block, Koramangala, Bengaluru, Karnataka
                      560034
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
                  <input type="text" placeholder="Expiration MM/YY" />
                  <input type="text" placeholder="CVV" />
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
                    <input type="checkbox" name="" id="" />
                    use my billing address
                  </span>
                  <br />
                  <span>
                    5th Floor, SJR Primus, 20th Main Rd, next to Raheja Arcade,
                    5th Block, Koramangala, Bengaluru, Karnataka 560034
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
            <input type="text" placeholder="Enter PAN number" />
          </div>
          <div>
            <p style={{ padding: "0 20px" }}>
              {" "}
              A Permanent Account Number is required for orders of ₹200000 or
              more. It will be included on your electronic receipt for tax
              purposes.
            </p>
          </div>
          <div>
            <p>
              {" "}
              If you are buying for a business, please note that Apple cannot
              add a Business GST number to your invoice. You will receive a
              consumer invoice.
            </p>
          </div>
        </div>
      </div>

      <div className="review_button">
        <button>Review Your Order</button>
      </div>
    </div>
  );
}

export default Payment;
