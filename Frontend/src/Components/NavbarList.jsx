import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export const NavbarList = () => {
  return (
    <>
      <div className="navList">
        <p>Shop</p>
        <Link className="naveLinks" to="/store">
          Shop the Latest
        </Link>
        <Link className="naveLinks" to="/mac">
          Mac
        </Link>
        <Link className="naveLinks" to="/ipad">
          iPad
        </Link>
        <Link className="naveLinks" to="/iphone">
          iPhone
        </Link>
        <Link className="naveLinks" to="">
          Apple Watch
        </Link>
        <Link className="naveLinks" to="">
          Accessories
        </Link>
      </div>
      {/*  */}

      <div className="navList">
        <p>Quick Links</p>
        <Link className="naveLinks" to="/store">
          Find a Store
        </Link>
        <Link className="naveLinks">Order Status</Link>
        <Link className="naveLinks">Financing</Link>
        <Link className="naveLinks" to="/iphone">
          Apple Trade In
        </Link>
      </div>
      {/*  */}
      {/*  */}

      <div className="navList">
        <p>Shop Special Stores</p>
        <Link className="naveLinks">Certified Refurbished</Link>
        <Link className="naveLinks">Education</Link>
        <Link className="naveLinks">Business</Link>
        <Link className="naveLinks">Veterans and Military</Link>
        <Link className="naveLinks">Government</Link>
      </div>
      {/*  */}
    </>
  );
};
