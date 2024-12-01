// importing css
import React from "react";
import "../styles/header.css";
// importing react, libraries and other...
import { NavLink } from "react-router-dom";
import { isLogedInProps } from "../services/types";

const Header: React.FC<isLogedInProps> = ({ isLogedIn, setIsLogedIn }) => {
  return (
    <header>
      <div className="nav__menu">
        <NavLink to="/">
          <h5 className="active">Home</h5>
        </NavLink>
        <h5>Feature</h5>
        <h5>Blog</h5>
        <h5>Testimonials</h5>
      </div>
      <div className="logo__container">
        <div className="logo logo__header"></div>
      </div>
      <div className="header__btn__container">
        {isLogedIn ? (
          <NavLink to={"/"}>
            <button
              onClick={() => {
                setIsLogedIn(false);
                localStorage.clear();
              }}
              className="small__btn btn__green"
            >
              Log out
            </button>
          </NavLink>
        ) : (
          <>
            <NavLink to="/sign-in">
              <button className="small__btn ">Log in</button>
            </NavLink>
            <NavLink to="/sign-up">
              <button className="small__btn btn__green">Sign Up</button>
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
