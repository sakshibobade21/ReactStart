import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Header";
import '../../styles/AppLayout.css';

const AppLayout = () => {
  return(
    <div className="applayout">
      <HeaderComponent/>
    </div>
  )
}

export default AppLayout;