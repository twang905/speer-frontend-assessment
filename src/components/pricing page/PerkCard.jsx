import React from "react";

function PerkCard(props) {
    return(
        <div className="perk-card col-lg-4">
            <hr />
            <h3 className="perk-title">{props.title}</h3>
            <p className="perk-description">{props.description}</p>
        </div>
    );
}

export default PerkCard;