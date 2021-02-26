import React from "react";
import DropdownSelector from "./DropdownSelector";
import Textfield from "./Textfield";

function CreditCardInfo() {
    return(
        <div className="col-6 credit-card-info">
            {/* form title */}
            <h3 className="payment-step">3. Credit Card Information</h3>
            <form>
                <Textfield label="Cardholder's name" />
                <Textfield label="Card number" />
                {/* date dropdown row */}
                <div className="row">
                    <div className="col-lg-6">
                        <DropdownSelector />
                    </div>
                    <div className="col-lg-6">
                        <DropdownSelector />
                    </div>
                </div>
                <Textfield label="CVV" />
            </form>
        </div>
    );
}

export default CreditCardInfo;