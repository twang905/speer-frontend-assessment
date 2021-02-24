import React from "react";
import PlanCard from "./PlanCard";
import plans from "../../plans";

function PricingSection() {
    return(
        <div id="pricing-section">
            <h1 className="section-title">pricing</h1>
            <h2 className="pricing-subtitle">Test out our app today! Choose from three subscription Based payment models</h2>
            <div className="row">
            {plans.map((plan) => 
              <PlanCard
                key={plan.id}
                name={plan.name}
                term={plan.term}
                price={plan.price}
                details={plan.details}
              />
            )}
            </div>
        </div>
    );
}

export default PricingSection;