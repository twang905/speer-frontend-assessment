import React from "react";

// sibgle perk card
function PerkCard(props) {
    // styles used for coloring each card
    const titleStyle = { color: props.color, };
    const lineStyle = { backgroundColor: props.color, }

    return(
        // take up 1/3 of screen
        <div className="perk-card col-4">
            {/* line */}
            <div className="line" style={lineStyle}/>
            {/* title */}
            <h3 
                style={titleStyle} 
                className="perk-title">
                {props.title}
            </h3>
            {/* description */}
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