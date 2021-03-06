import React from "react";
import plans from "../../plans";
import PlanSelect from "./PlanSelection";

// returns proper color based on specs
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

// shows options available for purchasing plan
function SelectPlan() {
    return(
        <div className="select-plan">
            <div className="row">
                {/* keep to left side of screen */}
                <div className="col-lg-8">
                    <h3 className="payment-step">1. Select your plan</h3>
                        <div className="row">
                        {/* show options from plans.js */}
                        {plans.map((plan) => 
                            <PlanSelect 
                                name={plan.name}
                                color={getColor(plan.id)}
                            />
                        )}
                        </div>
                    </div>
                <div className="col-lg-4" />
            </div>
        </div>
    );
}

export default SelectPlan;