import React from "react";
import Carousel from "./Carousel";

function HeroSection() {
    return(
        <section id="hero-section">
            <Carousel />
            <div className="hero-contents">
                <h1 className="hero-title">interactive concert experience</h1>
                <h2 className="hero-subtitle">Experience your favourite artists like never before and from the comfort of your own home.</h2>
                <button type="button" className="grad-btn hero-button">TRY IT NOW</button>
            </div>
        </section>
    );
}

export default HeroSection;