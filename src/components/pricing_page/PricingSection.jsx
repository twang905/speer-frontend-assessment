import React from "react";
import PlanCard from "./PlanCard";
import plans from "../../plans";

function getColor(id) {
  const mod = id % 3;
  switch(mod) {
      case 1:
          return "#D34848";
          break;
      case 2:
          return "#FFB33F";
          break;
      case 0:
          return "#1FE1E9";
          break;
  }
}

function PricingSection() {
  return(
      <div id="pricing-section">
          <h1 className="section-title">pricing</h1>
          <h2 className="pricing-subtitle">Test out our app today! Choose from three subscription based payment models</h2>
          <div className="row pricing-row">
          {plans.map((plan) => 
            <PlanCard
              key={plan.id}
              name={plan.name}
              term={plan.term}
              price={plan.price}
              details={plan.details}
              color={getColor(plan.id)}
            />
          )}
          </div>
      </div>
  );
}

export default PricingSection;