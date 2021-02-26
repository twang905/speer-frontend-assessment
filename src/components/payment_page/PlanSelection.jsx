import React from "react";

// multiple choice selection for plans
function PlanSelect(props) {
    const titleStyle = { color: props.color, };
    return(
        <div className="col-lg-4">
            {/* selection bubble */}
            <input type="radio" className="radio"></input>
            {/* plan name */}
            <h3 style={titleStyle} className="plan-select">{props.name}</h3>
        </div>
    );
}

export default PlanSelect;