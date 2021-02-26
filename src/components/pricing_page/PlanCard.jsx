import React from "react";
import { useHistory } from "react-router-dom";

// a single plan card
function PlanCard(props) {
    // styles for coloring
    const titleStyle = { color: props.color, };
    const lineStyle = { backgroundColor: props.color, }
    const history = useHistory();

    return(
        <div className="plan-card col-lg-4">
            {/* title */}
            <h3 
                className="plan-name"
                style={titleStyle}>
                {props.name}
            </h3>
            <div className="line" style={lineStyle}/>
            {/* term */}
            <h3 
                className="plan-term" 
                style={titleStyle}>
                {props.term}
            </h3>
            {/* price */}
            <h1 
                className="plan-price"
                style={titleStyle}>
                ${props.price}
            </h1>
            {/* details */}
            <div className="plan-details">
                {props.details.map((detail) => 
                    <li>{detail}</li>
                )}
            </div>
            {/* select button */}
            <button 
                style={lineStyle} 
                type="button" 
                onClick={() => history.push('/payment') } 
                className="btn plan-button"
            >
                select
            </button>
        </div>
    );
}

export default PlanCard;