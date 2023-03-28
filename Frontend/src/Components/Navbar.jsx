import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";
import $ from "jquery";

export const Navbar = () => {
  $(document).on("mouseover", ".showDown,.headerDropDown", function () {
    $(".headerDropDown").css({
      height: "350px",
      overflow: "visible",
    });
  });
  $(document).on("mouseout", ".showDown,.headerDropDown", function () {
    $(".headerDropDown").css({
      height: "0",
      overflow: "hidden",
    });
  });

  return (
    <>
      <header>
        <div className="icons">
          <Link>
            <i className="fa fa-apple"></i>
          </Link>
          <Link className="showDown">Store</Link>
          <Link className="showDown">Mac</Link>
          <Link className="showDown">iPad</Link>
          <Link className="showDown">Watch</Link>
          <Link className="showDown">AirPods</Link>
          <Link className="showDown">TV & Home</Link>
          <Link className="showDown">Entertainment</Link>
          <Link className="showDown">Accessories</Link>
          <Link className="showDown">Support</Link>
          <Link>
            <i className="fa fa-search"></i>
          </Link>
          <Link>
            <svg
              height="48"
              viewBox="0 0 17 48"
              width="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z"></path>
            </svg>
          </Link>
        </div>
      </header>
      <div className="headerDropDown">
        <div className="navList">
          <p>Shop</p>
          <Link>Shop the Latest</Link>
          <Link>Mac</Link>
          <Link>iPad</Link>
          <Link>iPhone</Link>
          <Link>Apple Watch</Link>
          <Link>Accessories</Link>
        </div>
        {/*  */}

        <div className="navList">
          <p>Quick Links</p>
          <Link>Find a Store</Link>
          <Link>Order Status</Link>
          <Link>Financing</Link>
          <Link>Apple Trade In</Link>
        </div>
        {/*  */}
        {/*  */}

        <div className="navList">
          <p>Shop Special Stores</p>
          <Link>Certified Refurbished</Link>
          <Link>Education</Link>
          <Link>Business</Link>
          <Link>Veterans and Military</Link>
          <Link>Government</Link>
        </div>
        {/*  */}
      </div>
    </>
  );
};
