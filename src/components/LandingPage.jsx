import React from "react";
import Download from "./landing_page/Download";
import FrontRowSeats from "./landing_page/FrontRowSeats";
import HeroSection from "./landing_page/HeroSection";
import LandingPerks from "./landing_page/LandingPerks";
import Reviews from "./landing_page/Reviews";
import SuperiorSound from "./landing_page/SuperiorSound";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function LandingPage() {
    return(
        <div>
            {/* moving navigation bar */}
            <header id="header">
                <Navbar color="white"/>
            </header>
            {/* main body of landing page */}
            <div id="landing-page">
                <div class="wrapper">
                    <div class="parent">
                        <HeroSection />
                        <SuperiorSound/>
                        <FrontRowSeats/>
                        <LandingPerks/>
                        <Reviews/>
                        <Download/>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;