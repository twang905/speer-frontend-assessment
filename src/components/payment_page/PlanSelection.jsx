import React from "react";

function PlanSelect(props) {
    const titleStyle = { color: props.color, };
    return(
        <div className="col-lg-4">
            <input type="radio" className="radio"></input>
            <h3 style={titleStyle} className="plan-select">{props.name}</h3>
        </div>
    );
}

export default PlanSelect;