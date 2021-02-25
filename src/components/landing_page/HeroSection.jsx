import React from "react";
import Carousel from "./Carousel";

function HeroSection() {
    return(
        <section id="hero-section">
            <Carousel />
            <div className="black-filter"></div>
            <div className="hero-contents">
                <h1 className="hero-title landing-title">interactive concert experience</h1>
                <h2 className="hero-subtitle">Experience your favourite artists like never before and from the comfort of your own home.</h2>
                <div className="center-horizontal">
                    <button type="button" className="grad-btn">TRY IT NOW</button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;