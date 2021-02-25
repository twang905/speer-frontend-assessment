import React from "react";
import PricingSection from "./pricing_page/PricingSection";
import PerksSection from "./pricing_page/PerksSection";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

function PricingPage() {
    return(
        <div>
            {/* Fixed navigation bar */}
            <header id="header">
                <Navbar color="white"/>
            </header>
            {/* main body of pricing page */}
            <div id="pricing-page">
                <PricingSection />
                <PerksSection />
                <Footer />
            </div>
        </div>
    );
}

export default PricingPage;