import React from "react";
import PerkCard from "./PerkCard";
import perks from "../../perks"


function PerksSection() {
    return(
        <div id="perks-section">
            <h1 className="section-title">perks</h1>
            <div className="row">{
                perks.map((perk) =>
                <PerkCard 
                    title={perk.title}
                    description={perk.description}
                />
            )}
            </div>
        </div>
    );
}

export default PerksSection;