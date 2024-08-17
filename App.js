const heading = React.createElement("div", { id: "parentDiv" }, [
  React.createElement("div", { id: "childDiv1" }, [
    React.createElement("h1", { id: "heading1" }, "Hello h1 tag"),
    React.createElement("h2", { id: "heading2" }, "Hello h2 tag"),
    React.createElement("h3", { id: "heading3" }, "Hello h3 tag"),
  ]),
  React.createElement("div", { id: "childDiv2" }, [
    React.createElement("h1", { id: "heading1" }, "Hello h1 tag"),
    React.createElement("h2", { id: "heading2" }, "Hello h2 tag"),
    React.createElement("h3", { id: "heading3" }, "Hello h3 tag"),
  ]),
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
