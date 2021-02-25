import React from "react";

function BillingInfo() {
    return(
        <div className="billing-info">
            <h3 className="payment-step">2. Billing Information</h3>
            <form>
                <label className="textfield-label">Full name
                    <input type="text" className="textfield"/>
                </label>
                <label className="textfield-label">billing address
                    <input type="text" className="textfield"/>
                </label>
                <div className="row">
                    <div className="col-lg-6">
                        <label className="textfield-label">city
                            <input type="text" className="textfield"/>
                        </label>
                    </div>
                    <div className="col-lg-6">
                        <label className="textfield-label">postal code
                            <input type="text" className="textfield"/>
                        </label>
                    </div>
                </div>
                <label className="textfield-label">country
                    <input type="text" className="textfield"/>
                </label>
            </form>
        </div>
    );
}

export default BillingInfo;