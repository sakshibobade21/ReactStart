import React from "react";
import ReactDOM from "react-dom/client";


// Title is a react element
const Title = () => (
  <h1 className="first-heading">
    HEYY THERE
  </h1>
)

const Header = () => (
  <div>
    {Title()}
    <Title/>
    <h3>Done</h3>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Header />);