import * as React from "react";
import './styles/Header.scss'

const Header = () => {
    return (
        <>
            <header className="footer_lorem-ipsum">
                <div className="container">
                    <img src="images/icons/logo.svg" alt="logo" className="logo" />
                    <span>+7 (495) 495-49-54</span>
                </div>
            </header>
        </>
    );
};

export default Header;

