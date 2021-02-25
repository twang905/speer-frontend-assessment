import React from "react";
import Download from "./landing_page/Download";
import FrontRowSeats from "./landing_page/FrontRowSeats";
import HeroSection from "./landing_page/HeroSection";
import LandingPerks from "./landing_page/LandingPerks";
import Reviews from "./landing_page/Reviews";
import SuperiorSound from "./landing_page/SuperiorSound";

function LandingPage() {
    return(
        <div id="landing-page">
            <HeroSection/>
            <SuperiorSound/>
            <FrontRowSeats/>
            <LandingPerks/>
            <Reviews/>
            <Download/>
        </div>
    );
}

export default LandingPage;