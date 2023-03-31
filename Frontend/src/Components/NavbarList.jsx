import React from "react";
import { Link } from "react-router-dom";

export const NavbarList = () => {
  return (
    <>
      <div className="navList">
        <p>Shop</p>
        <Link to="/store">Shop the Latest</Link>
        <Link to="/mac">Mac</Link>
        <Link to="/ipad">iPad</Link>
        <Link to="/iphone">iPhone</Link>
        <Link to="">Apple Watch</Link>
        <Link to="">Accessories</Link>
      </div>
      {/*  */}

      <div className="navList">
        <p>Quick Links</p>
        <Link to="/store">Find a Store</Link>
        <Link>Order Status</Link>
        <Link>Financing</Link>
        <Link to="/iphone">Apple Trade In</Link>
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
    </>
  );
};
