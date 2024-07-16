import React from "react";
import ReactDOM from "react-dom/client";
import logo from '../assets/logo.png';
import '../../styles/HeaderComponent.css';

const HeaderComponent = () => {
  return(
    <div className="header-container">
      <img className="logo" src={logo} alt="Logo" />
    </div>
    
  )
}

export default HeaderComponent;
