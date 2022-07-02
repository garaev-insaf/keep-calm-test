import * as React from "react";
import './styles/Lorem.scss'

const Lorem = () => {
    return (
        <>
            <section className="lorem-section">
                <header className="lorem-section-header">
                    <h2 className="lorem-section-header__header-text">
                        Lorem ipsum dolor <i>sit</i> amet
                    </h2>
                </header>
                <div className="lorem-first-block-wrapper block-wrapper">
                    <div className="lorem-first-block-wrapper__description first-row">
                        <header className="lorem-first-block-wrapper__header">
                            <h3 className="header-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </h3>
                        </header>
                        <p className="description-text">Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum/ Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                    </div>
                    <div className="lorem-first-block-wrapper__photo second-row">
                        <img src="images/lorem/first-photo.png" alt="lorem-photo" />
                    </div>
                </div>
                <div className="lorem-second-block-wrapper block-wrapper">
                    <div className="lorem-first-block-wrapper__photo first-row">
                        <img src="images/lorem/second-photo.png" alt="lorem-photo" />
                    </div>
                    <div className="lorem-first-block-wrapper__description second-row">
                        <header className="lorem-first-block-wrapper__header">
                            <h3 className="header-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </h3>
                        </header>
                        <p className="description-text">Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Lorem;

