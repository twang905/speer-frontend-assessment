import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import hero1 from "../../assets/hero_image1.png";
import hero2 from "../../assets/hero_image2.png";
import hero3 from "../../assets/hero_image3.png";
import IndicatorButton from "./IndicatorButton";

function HeroSection() {

    const history = useHistory();
    const images = [hero1, hero2, hero3]
    const [index, setIndex] = useState(0);

    function updateIndex(newValue) {
        setIndex(newValue);
    }

    function incrementIndex() {
        setIndex((index + 1) % 3)
    }

    const style = {
        backgroundImage: `url(${images[index]})`,
        backgroundSize: "cover",
    }

    const filled = { backgroundColor: "white"};

    return(
        <section style={style} id="hero-section">
            <div className="hero-contents">
                {/* title */}
                <h1 className="hero-title">interactive concert experience</h1>
                <h2 className="hero-subtitle">Experience your favourite artists like never before and from the comfort of your own home.</h2>
                {/* CTA button */}
                <button 
                    type="button" 
                    onClick={() => history.push('/pricing') } 
                    className="grad-btn hero-button"
                >
                    TRY IT NOW
                </button>
                <div className="row indicator-row">
                    <IndicatorButton 
                        onClick={ () => updateIndex(0) }
                        style={ index == 0 ? filled : null }
                    />
                    <IndicatorButton 
                        onClick={ () => updateIndex(1) }
                        style={ index == 1 ? filled : null }
                    />
                    <IndicatorButton 
                        onClick={ () => updateIndex(2) }
                        style={ index == 2 ? filled : null }
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;