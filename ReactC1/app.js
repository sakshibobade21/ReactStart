const newElement = React.createElement("h1", {id: "newTag"}, "Hello World From The React");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(newElement);