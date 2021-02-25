import React from "react";
import InfoForms from "./payment_page/InfoForms";
import SelectPlan from "./payment_page/SelectPlan";
import Navbar from "./shared/Navbar";

function PaymentPage() {
    return(
        <div>
            <Navbar color="black" />
            <div id="payment-page">
                <h1 className="section-title">payment</h1>
                <SelectPlan />
                <InfoForms />
                <div className="row">
                    <div className="col-lg-6">
                        <p className="terms-of-service">By continuing, I acknowledge that I've read and agree to the Terms of Service & Privacy Policy</p>
                        <button type="button" className="grad-btn payment-page-button">Download</button>
                    </div>
                    <div className="col-lg-6" />
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;