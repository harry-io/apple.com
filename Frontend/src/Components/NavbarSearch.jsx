import React from "react";
import { Link } from "react-router-dom";

export const NavbarSearch = () => {
  return (
    <div className="searchBx">
      <form>
        <i className="fa fa-search"></i>
        <input autoFocus type="search" placeholder="Search apple.com" />
      </form>
      <div className="searchOptions">
        <p>Quice Links</p>
        <Link className="naveLinks" to="/store">
          <i className="fa fa-arrow-right"></i>
          Find a Store
        </Link>
        <Link className="naveLinks" to="/mac">
          <i className="fa fa-arrow-right"></i>
          Map
        </Link>
        <Link className="naveLinks" to="/iphone">
          <i className="fa fa-arrow-right"></i>
          iphone
        </Link>
        <Link className="naveLinks" to="/watch">
          <i className="fa fa-arrow-right"></i>
          Watch
        </Link>
        <Link className="naveLinks" to="/ipad">
          <i className="fa fa-arrow-right"></i>
          ipad
        </Link>
      </div>
    </div>
  );
};
