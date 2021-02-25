import React from "react";
import InfoForms from "./payment_page/InfoForms";
import SelectPlan from "./payment_page/SelectPlan";
import TermsOfService from "./payment_page/TermsOfService";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function PaymentPage() {
    return(
        <div>
            {/* fixed navigation bar */}
            <Navbar color="black" />
            {/* main body of payment page */}
            <div id="payment-page">
                <h1 className="section-title">payment</h1>
                <SelectPlan />
                <InfoForms />
                <TermsOfService />
            </div>
            <Footer />
        </div>
    );
}

export default PaymentPage;