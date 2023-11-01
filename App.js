import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => (
  <h1 className="head" tabIndex="5">
    Hello JSX
  </h1>
);

const HeadingComponent = () => (
    <div>
        <Heading/>
        <h1>Heading Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
