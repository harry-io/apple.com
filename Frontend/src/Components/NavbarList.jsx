import React from "react";
import { Link } from "react-router-dom";

export const NavbarList = () => {
  return (
    <>
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
    </>
  );
};
