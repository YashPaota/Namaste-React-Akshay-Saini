import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props)
    {
        super(props);
        // console.log("Parent Constructor");
    }


   componentDidMount()
    {
        // console.log("Parent ComponentDidMount");
        
    }


    render(){
        // console.log("Parent Render")
        return (
            <div>
                <h1>About from Class Component</h1>
                <h2>This is namaste react</h2>
                {/* <User name = "Yash Paota (function)" location = "Paota" /> */}
                <UserClass  />
            </div>
        )

    }
}











export default About;