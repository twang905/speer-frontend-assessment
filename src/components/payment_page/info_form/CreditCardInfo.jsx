import React from "react";

function CreditCardInfo() {
    return(
        <div className="credit-card-info">
            <h3 className="payment-step">3. Credit Card Information</h3>
            <form>
                <label className="textfield-label">Cardholder's name
                    <input type="text" className="textfield"/>
                </label>
                <label className="textfield-label">Card number
                    <input type="text" className="textfield"/>
                </label>
                <div className="row">
                    <div className="col-lg-6">
                        <label className="textfield-label">Expiry month
                            <select value="Radish">
                                <option value="Orange">Orange</option>
                                <option value="Radish">Radish</option>
                                <option value="Cherry">Cherry</option>
                            </select>
                        </label>
                    </div>
                    <div className="col-lg-6">
                        <label className="textfield-label">Expiry year
                            <select value="Radish">
                                <option value="Orange">Orange</option>
                                <option value="Radish">Radish</option>
                                <option value="Cherry">Cherry</option>
                            </select>
                        </label>
                    </div>
                </div>
                <label className="textfield-label">CVV
                    <input type="text" className="textfield"/>
                </label>
            </form>
        </div>
    );
}

export default CreditCardInfo;