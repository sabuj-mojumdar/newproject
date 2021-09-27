import React from 'react';
import "./header.css";
import logo from "../../images/logo.png";
//header component
const Header = () => {
    return (
        <div className="header container text-center">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </div>
    );
};


export default Header;