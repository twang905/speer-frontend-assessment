import React from "react";
import Download from "./landing page/Download";
import FrontRowSeats from "./landing page/FrontRowSeats";
import HeroSection from "./landing page/HeroSection";
import LandingPerks from "./landing page/LandingPerks";
import Reviews from "./landing page/Reviews";
import SuperiorSound from "./landing page/SuperiorSound";

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