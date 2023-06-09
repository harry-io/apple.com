import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import { NavbarList } from "./NavbarList";
import { NavbarBag } from "./NavbarBag";
import { NavbarSearch } from "./NavbarSearch";

export const Navbar = () => {
  const [select, setSelect] = useState("");

  $(document).on("mouseover", ".showDown,.headerDropDown", function () {
    $(".headerDropDown").addClass("active");
    // setSelect("");
  });

  $(document).on("mouseover", ".showDown", function () {
    setSelect("");
  });

  $(document).on("click", ".Navham", () => {
    $("header").toggleClass("active");
  });

  $(document).on("click", ".naveLinks", function () {
    $(".headerDropDown").removeClass("active");
    $("header").removeClass("active");
  });

  //
  $(document).on("mouseout", ".showDown,.headerDropDown", function () {
    $(".headerDropDown").removeClass("active");
    // setSelect("");
  });

  // for cart section in navbars
  const handleSelect = () => {
    setSelect("bag");
    $(".headerDropDown").toggleClass("active");
  };
  // For search section in navbar
  function handleSearch() {
    setSelect("search");
    $(".headerDropDown").toggleClass("active");
  }

  return (
    <>
      <header className="header">
        <div className="Navham"></div>
        <div className="icons">
          <Link className="naveLinks" to="/">
            {/* <i className="fa fa-bolt"></i> */}
            <img
              className="nav_logo"
              src="https://i.ibb.co/SnNM4tm/Logo.png"
              alt="logo"
            />
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
          <Link onClick={handleSearch}>
            <i className="fa fa-search"></i>
          </Link>
          <Link onClick={handleSelect}>
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
        {/* {select ? <NavbarBag /> : <NavbarList />} */}
        {select == "bag" ? <NavbarBag /> : ""}
        {select == "" ? <NavbarList /> : ""}
        {select == "search" ? <NavbarSearch /> : ""}
      </div>
    </>
  );
};
