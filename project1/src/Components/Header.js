import React from "react";
import ReactDOM from "react-dom/client";
import logo from '../assets/logo.png';
import '../../styles/HeaderComponent.css';
import Navbar from "./Navbar";

const HeaderComponent = () => {
  return(
    <div className="header-container">
      <img className="logo" src={logo} alt="Logo" />
      <Navbar/>
    </div>
    
  )
}

export default HeaderComponent;
