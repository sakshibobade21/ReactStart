// <div id="parent">
//    <div id="child">
//        <h1>Hey There</h1>
//    </div>
// </div>

const element = React.createElement("h1", {}, "Hey There");
const child = React.createElement("div", {id: "child"}, element);
const parent = React.createElement("div", {id: "parent"}, child);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


