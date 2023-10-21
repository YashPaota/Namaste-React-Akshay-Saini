import React from "react";
import { LOGO_URL } from "../utils/constants";

class UserClass extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            userInfo : {
                name:"Mohit Goel",
                location:"Jaipur",
                avatar_url:"https://api.github.com/users/akshaymarch7",
            }
        }

        // console.log("Child Constructor");
    }

    async componentDidMount()
    {
        // console.log("Child ComponentDidMount");
        const data = await fetch("https://api.github.com/users/yashpaota");
        const json = await data.json();

        this.setState({
            userInfo : json,
        })
        console.log(json);
    }

    componentDidUpdate()
    {
        console.log("Updated Component");
    }

    componentWillUnmount()
    {
        console.log("Component will unmount");
    }
    render() {

        // console.log("Child Render");
        // const{name , location} = this.props;
        const{name , location , avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
               <img src={avatar_url} alt="My Image" />
               <h2>Name : {name}</h2>
               <h3>Location : {location}</h3>
               <h4>Contact : @yashpaota</h4>
            </div>
        );
    }
}

export default UserClass;