import React from "react";

function PlanCard(props) {
    return(
        <div className="plan-card col-lg-4">
            <h3 className="plan-name">{props.name}</h3>
            <hr></hr>
            <h3 className="plan-term">{props.term}</h3>
            <h1 className="plan-price">${props.price}</h1>
            <div className="plan-details">
                {props.details.map((detail) => 
                    <li>{detail}</li>
                )}
            </div>
            <button type="button" className="btn">Select</button>
        </div>
    );
}

export default PlanCard;