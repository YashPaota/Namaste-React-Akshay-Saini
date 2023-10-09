// First of all we have initialized thr npm in our project.
//Now that we have an npm we can install the parcel in our project.We will install parcel as devDependency.
//Now insted of using CDN we can use React directly.
//Install React and ReactDOM from npm and import it itno ur files.
//use npx parcel index.html for the development build.
//use npx parcel build index.html for the production build.

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{},"Namaste from react");
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);