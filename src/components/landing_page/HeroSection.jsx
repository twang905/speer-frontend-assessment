import React from "react";

function HeroSection() {
    return(
        <section id="hero-section">
            <h1 className="hero-title landing-title">interactive concert experience</h1>
            <h2 className="hero-subtitle">Experience your favourite artists like never before and from the comfort of your own home.</h2>
            <div className="center-horizontal">
                <button type="button" className="grad-btn">TRY IT NOW</button>
            </div>
        </section>
    );
}

export default HeroSection;