import React from "react";

function PlanCard(props) {

    const titleStyle = { color: props.color, };

    const lineStyle = { backgroundColor: props.color, }

    return(
        <div className="plan-card col-lg-4">
            <h3 
                className="plan-name"
                style={titleStyle}>
                {props.name}
            </h3>
            <div className="line" style={lineStyle}/>
            <h3 
                className="plan-term" 
                style={titleStyle}>
                {props.term}
            </h3>
            <h1 
                className="plan-price"
                style={titleStyle}>
                ${props.price}
            </h1>
            <div className="plan-details">
                {props.details.map((detail) => 
                    <li>{detail}</li>
                )}
            </div>
            <button 
                style={lineStyle} 
                type="button" 
                className="btn plan-button">
                Select
            </button>
        </div>
    );
}

export default PlanCard;