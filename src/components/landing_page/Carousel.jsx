import React from "react";
import hero from "../../assets/hero-image.png";
import heroTwo from "../../assets/hero_image2.png";
import heroThree from "../../assets/hero_image3.png";

function Carousel() {
    return(
        <div
            id="testimonials-carousel"
            class="carousel slide"
            data-bs-ride="carousel"
        >
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img className="carousel-img" src={hero}/>
                </div>
                <div class="carousel-item">
                    <img className="carousel-img" src={heroTwo} />
                </div>
                <div class="carousel-item">
                    <img className="carousel-img" src={heroThree}/>
                </div>
            </div>
            <a
                class="carousel-control-prev"
                href="#testimonials-carousel"
                role="button"
                data-slide="prev"
            >
                <span class="carousel-button carousel-control-prev-icon"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a
                class="carousel-control-next"
                href="#testimonials-carousel"
                role="button"
                data-slide="next"
            >
                <span class="carousel-button carousel-control-next-icon"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;