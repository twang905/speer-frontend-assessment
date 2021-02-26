import React from "react";
import BillingInfo from "./info_form/BillingInfo";
import CreditCardInfo from "./info_form/CreditCardInfo";

// forms for payment checkout
function InfoForms() {
    return(
        <div className="info-forms">
            {/* form row */}
            <div className="row">
                <BillingInfo />
                <CreditCardInfo />
            </div>
        </div>
    )
}

export default InfoForms;