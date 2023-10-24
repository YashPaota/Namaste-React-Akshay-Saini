import APP_STORE_LOGO from "../utils/constants";
import PLAY_STORE_LOGO from "../utils/constants";

const Footer = () => {
    return(
        <div className="p-10 bg-black text-white border border-black mb-8">
          <div className="flex justify-evenly">
            <div className="p-2">
                <h4 className="font-medium opacity-50">COMPANY</h4>
                <ul>
                    <li className="hover:cursor-pointer">About Us</li>
                    <li className="hover:cursor-pointer">Team</li>
                    <li className="hover:cursor-pointer">Careers</li>
                    <li className="hover:cursor-pointer">Blog</li>
                    <li className="hover:cursor-pointer">Bug Bounty</li>
                    <li className="hover:cursor-pointer">Corporate</li>
                    <li className="hover:cursor-pointer">Contact</li>
                    <li className="hover:cursor-pointer">Genie</li>
                    <li className="hover:cursor-pointer">About Us</li>
                    <li className="hover:cursor-pointer">About Us</li>
                </ul>
            </div>

            <div className="p-2">
                <h4 className="font-medium opacity-50">CONTACT</h4>
                <ul>
                    <li className="hover:cursor-pointer">Help & Support</li>
                    <li className="hover:cursor-pointer">Patern With Us</li>
                    <li className="hover:cursor-pointer">Ride With Us</li>
                </ul>
            </div>

            <div className="p-2">
                <h4 className="font-medium opacity-50">LEGAL</h4>
                <ul>
                    <li className="hover:cursor-pointer">Terms & Conditions</li>
                    <li className="hover:cursor-pointer">Refund & Cancellation</li>
                    <li className="hover:cursor-pointer">Privacy Policy</li>
                    <li className="hover:cursor-pointer">Cookie Policy</li>
                    <li className="hover:cursor-pointer">Offer Terms</li>
                    <li className="hover:cursor-pointer">Phishing & Fraud</li>
                </ul>
            </div>
            <div className="p-2 flex flex-col justify-center ">
                <img className="hover:cursor-pointer" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="APP STORE LOGO" />
                <img className="hover:cursor-pointer" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="PLAY STORE LOGO" />
            </div>
          </div>
        </div>
    )
}

export default Footer;