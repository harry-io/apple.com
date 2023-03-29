import React from "react";
import { Link } from "react-router-dom";

export const NavbarBag = () => {
  return (
    <>
      <div className="cartData">
        <div className="navBox1">
          {/*  */}
          <div className="navCard">
            <img
              src="https://ioshacker.com/wp-content/uploads/2023/01/MacBook-Pro-2023-1024x598.jpg"
              alt=""
            />
            <div className="navData">
              <h4>macBookPro</h4>
              <p>Supercharged by M2 Pro and M2 Max.</p>
            </div>
          </div>
          {/*  */}
          <div className="navCard">
            <img
              src="https://ioshacker.com/wp-content/uploads/2023/01/MacBook-Pro-2023-1024x598.jpg"
              alt=""
            />
            <div className="navData">
              <h4>macBookPro</h4>
              <p>Supercharged by M2 Pro and M2 Max.</p>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="navBox1">
          <h3>My Profile</h3>
          <Link>
            <i className="fa fa-truck"></i> Orders
          </Link>
          <Link>
            <i className="fa fa-bookmark-o"></i> Your Saves
          </Link>
          <Link>
            <i className="fa fa-user-o"></i> Account
          </Link>
          <Link>
            <i className="fa fa-sign-in"></i> Sign in
          </Link>
        </div>
      </div>
    </>
  );
};
