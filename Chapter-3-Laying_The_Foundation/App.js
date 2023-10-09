import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1",{},"Namaste From Paota");
console.log(heading);
const root=  ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);