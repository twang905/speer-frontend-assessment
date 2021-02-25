import React from "react";
import BillingInfo from "./info_form/BillingInfo";
import CreditCardInfo from "./info_form/CreditCardInfo";

function InfoForms() {
    return(
        <div className="info-forms">
            <div className="row">
                <div className="col-lg-6">
                    <BillingInfo />
                </div>
                <div className="col-lg-6">
                    <CreditCardInfo />
                </div>
            </div>
        </div>
    )
}

export default InfoForms;