import React from "react";
import ReactDOM from "react-dom/client";


// JSX

const Component2 = () => {
       return <>

              <h3>This is Component 2</h3>
       </>
}

const Component1 = () => {
       return <>

              <h3>This is Component 1</h3>
       </>
}
//console.log(jsxHeading);

const HeadingComponent = () => {
       return <>
              <Component1 />
              <Component2 />
              <h1>{488 + 900}</h1>
              <h2>{console.log("dfsbhnsmn")}</h2>
              <h2 className="heading">This is Shreyas from Component</h2>
       </>
}


let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);


