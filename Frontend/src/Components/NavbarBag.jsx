import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAction } from "../Redux/Auth/auth.action";

export const NavbarBag = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.authReducer.isAuth);
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
            <i className="fa fa-user-o"></i> Admin
          </Link>
          {isAuth ? (
            <Link to="" onClick={() => dispatch(logoutAction)}>
              <i className="fa fa-sign-in"></i> Logout
            </Link>
          ) : (
            <Link to="/login">
              <i className="fa fa-sign-in"></i> Sign in
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
