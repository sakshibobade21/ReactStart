import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "Helloooo There");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(heading);

const jsx = <h1>Heyyaa</h1>
console.log(jsx);

// jsxHeading and heading are 2 exact same objects
