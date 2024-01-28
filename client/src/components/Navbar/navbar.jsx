import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { InvalidTokenError, jwtDecode } from 'jwt-decode';
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/searchicon.svg";
import Avatar from "../avatar/avatar";
import Button from "../button/button"; // Updated to start with an uppercase letter
import "./navbar.css";
import { setCurrentUser } from "../../actions/currentUser";


const Navbar = () => {
  const dispatch = useDispatch();
  
  var User = useSelector((state) => state.currentUserReducer);
  const navigate =useNavigate() 

  const handleLogout = () =>{

    dispatch({type: 'LOGOUT'});
    navigate('/')
    dispatch(setCurrentUser(null))
  }


  useEffect(()=>{
    const token = User?.token 
    if(token){
      const decodedToken = jwtDecode(token);
        if(decodedToken.exp * 1000 < new Date().getTime()){
            handleLogout()
        }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch])
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
              <Link to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link>
            </Avatar>
            <button className="nav-item nav-links" onClick={handleLogout}>Log out</button>
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

export default Navbar;
