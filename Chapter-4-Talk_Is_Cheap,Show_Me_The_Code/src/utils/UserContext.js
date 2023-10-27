import {createContext } from "react";

const UserContext = createContext({
    loggedIn : "Default Value",
});

export default UserContext;