import { useState } from "react";
import LOGO_URL from "../utils/constants";

const Header = () => {
    //  let btnInOut = 'Login';

    let [btnLogin, setBtnLogin] = useState("Login");

    console.log("Header Rendered");

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://cdn-icons-png.flaticon.com/512/6122/6122447.png"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button
                        className="login"
                        onClick={() => {
                            btnLogin == "Login"
                                ? setBtnLogin("Logout")
                                : setBtnLogin("Login");
                        }}
                    >
                        {btnLogin}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
