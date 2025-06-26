import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assest/Logo/2.png";
import "./Navbar.css";


function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <div className="navbar-container">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <h1>BuyNest</h1>
      </div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
          <div className="dropdown">
            <button className="dropdown-button">Profile</button>
            <div className="dropdown-content">
              <Link to="/signIn">Sign up</Link>
              <Link to="/Login">Login</Link>
              <a href="#">My Account</a>
              <a href="#">My Orders</a>
              <a href="#">My Wishlist</a>
              <a href="#">Logout</a>
            </div>
          </div>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
      </div>
    
      <div className="toggle-button-container">
        <button
          className={`toggle-button ${isDarkMode ? "dark" : "light"}`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? "🌚" : "🌞"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
