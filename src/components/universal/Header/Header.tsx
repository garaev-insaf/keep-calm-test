import * as React from "react";
import './styles/Header.scss'

const Header = () => {
    return (
        <>
            <header className="header_lorem-ipsum">
                <div className="container">
                    <img src="images/icons/logo.svg" alt="logo" className="logo" />
                    <img src="images/icons/phone.svg" alt="phone" className="phone"/>
                    <span>+7 (495) 495-49-54</span>
                </div>
            </header>
        </>
    );
};

export default Header;

