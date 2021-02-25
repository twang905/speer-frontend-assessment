import React from "react";

function PerkCard(props) {

    const titleStyle = {
        color: props.color,
    };

    const lineStyle = {
        backgroundColor: props.color,
    }

    return(
        <div className="perk-card col-lg-4">
            <div className="line" style={lineStyle}/>
            <h3 
                style={titleStyle} 
                className="perk-title">
                {props.title}
            </h3>
            <p 
                style={props.color != null 
                    ? {color: "white"} 
                    : {color: "black"}} 
                className="perk-description">
                {props.description}
            </p>
        </div>
    );
}

export default PerkCard;