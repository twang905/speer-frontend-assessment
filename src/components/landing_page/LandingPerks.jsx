import React from "react";
import PerkCard from "../pricing_page/PerkCard";
import perks from "../../perks";

function getColor(id) {
    const mod = id % 3;
    switch(mod) {
        case 1:
            return "#D34848";
            break;
        case 2:
            return "#1FE1E9";
            break;
        case 0:
            return "#FFB33F";
            break;
    }
}

function LandingPerks() {
    return(
        <section id="landing-perks">
            <h1 className="section-title">perks</h1>
            <div className="row perks-row">{
                perks.map((perk) =>
                <PerkCard 
                    title={perk.title}
                    description={perk.description}
                    color={getColor(perk.id)}
                />
            )}
            </div>
        </section>
    );
}

export default LandingPerks;