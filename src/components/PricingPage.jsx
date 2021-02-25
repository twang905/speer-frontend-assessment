import React from "react";
import PricingSection from "./pricing_page/PricingSection";
import PerksSection from "./pricing_page/PerksSection";
import Navbar from "./shared/Navbar";

function PricingPage() {
    return(
        <div>
            <header id="header">
                <Navbar color="white"/>
            </header>
            <div id="pricing-page">
                <PricingSection />
                <PerksSection />
            </div>
        </div>
    );
}

export default PricingPage;