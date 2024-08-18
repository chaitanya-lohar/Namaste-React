import React from "react";
import ReactDOM from "react-dom/client";

// Babel transpile jsx into React.createElement
// JSX => React.createElement(JS-Object) => HTMLElement

const jsxHeading = <h1 className="heading">this is first line in jsx</h1>;

// React component

// Class based component - OLD
// Functional based component - NEW

const Title = () => {
  return <h1>Title component</h1>;
};


const Heading = () =>(
    <>
    <div id="headDiv">
    <Title/>
    <h1>Heading Component</h1>
    </div>
    </>
);

const element = <span> this is element</span>;

const heading = (
    <p>this is jsx code
     {Heading()}
    </p>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
