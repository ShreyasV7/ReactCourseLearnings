import React from "react";
import ReactDOM from "react-dom/client";


// React Element

const heading = React.createElement("h1", { id: "heading" }, "Namaste Shreyas Vishwakarma");

console.log(heading) ; 

// JSX

const jsxHeading = <h1>This is Shreyas form JSX</h1>;
console.log(jsxHeading);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);


