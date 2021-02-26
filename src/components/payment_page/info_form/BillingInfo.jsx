import React from "react";
import Textfield from "./Textfield";

function BillingInfo() {
    return(
        <div className="col-6 billing-info">
            {/* form title */}
            <h3 className="payment-step">2. Billing Information</h3>
            <form>
                <Textfield label="Full name" />
                <Textfield label="Billing address" />
                {/* address row */}
                <div className="row">
                    <div className="col-lg-6">
                        <Textfield label="city" />
                    </div>
                    <div className="col-lg-6">
                        <Textfield label="psotal code" />
                    </div>
                </div>
                <Textfield label="country" />
            </form>
        </div>
    );
}

export default BillingInfo;