import * as React from "react";
import PhotosCarousel from "./PhotosCarousel/PhotosCarousel";
import './styles/Ipsum.scss'

const Ipsum = () => {
    return (
        <>
            <section className="ipsum-section">
                <header className="ipsum-section-header">
                    <h2 className="ipsum-section-header__header-text">
                        Lorem ipsum dolor <i>sit</i> amet
                    </h2>
                </header>
                <PhotosCarousel />
            </section>
        </>
    );
};

export default Ipsum;

