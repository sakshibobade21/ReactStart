// <div id="parent">
//    <div id="child">
//        <h1>Hey There</h1>
//        <h2>Sakshi here</h2>
//    </div>
// </div>

const element1 = React.createElement("h1", {}, "Hey There");
const element2 = React.createElement("h2", {}, "Sakshi Here");

const child = React.createElement("div", {id: "child"}, [element1, element2]);

const parent = React.createElement("div", {id: "parent"}, child);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


