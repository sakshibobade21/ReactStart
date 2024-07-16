import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/Components/AppLayout";

const App = () => {
  return(
    <AppLayout/>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);