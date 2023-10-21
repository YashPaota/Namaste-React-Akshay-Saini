import { useState } from "react";

const User = (props) => {
    const[count1 , setCount1] = useState(0);
    const[count2 , setCount2] = useState(1);
    return (
        <div className="user-card">
            <h2>Count1 : {count1}</h2>
            <h2>Count2 : {count2}</h2>
            <h2>Name : {props.name}</h2>
            <h3>Location : {props.location}</h3>
            <h4>Contact : @yashpaota</h4>
        </div>
    )
}

export default User;