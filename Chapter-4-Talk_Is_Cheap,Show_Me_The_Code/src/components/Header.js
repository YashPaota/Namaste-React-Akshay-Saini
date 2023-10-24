import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
    
    const[btnNameReact , setBtnNameReact] = useState("Login");
    console.log("Header rendered")

    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        console.log(" useEffectCalled");
    },[btnNameReact]);
    

    
    return(
        <div className="flex justify-around shadow-xl mb-2 sm:bg-yellow-50 lg:bg-white">
            <div className="">
                <img className="w-36 h-24 " src= {LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                       Online Status : {onlineStatus ?  "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                         <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                         <Link to="/contact">Contact Us </Link>
                    </li>
                    <li className="px-4">
                         <Link to="/grocery">Grocery </Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={() => 
                       {
                          btnNameReact === "Login" 
                          ? setBtnNameReact("Logout")
                          : setBtnNameReact("Login")
                        }}>
                    {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}


export default Header;