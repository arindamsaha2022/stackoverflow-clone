import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/searchicon.svg";
import Avatar from "../avatar/avatar";
import button from "../button/button";
import "./navbar.css";

var User = null;
const navbar = () => {
  return (
    <nav className="main-nav">
      <div className=" navbar">
        <Link to="/" className="nav-item nav-logo-mobile logo">
          <img src={logo} alt="logo-imge" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search..." className="inputbox"/>
          <img
            src={searchIcon}
            alt="searchIcon"
            width={25}
            className="search-icon"
          />
        </form>

        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links login">
            Log In
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="12px"
              py="7px"
              borderRadius="50%"
              color="white"
            >
              <Link style={{ color: "white", textDecoration: "none" }}>A</Link>
            </Avatar>
            <button className="nav-item nav-links">Log out</button>
          </>
        )}
      </div>
      <div className='toggle-button' >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
    </nav>
  );
};

export default navbar;
