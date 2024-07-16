import React from "react";
import ReactDOM from "react-dom/client";
import '../../styles/Navbar.css';

const Navbar = () => {
  return(
    <div className="navbar">
      <div className="nav-items">
        <div className="item">Offers</div>
        <div className="item">Help</div>
        <div className="item">Sign In</div>
        <div className="item">Cart</div>
      </div>
    </div>
  )
}

export default Navbar;