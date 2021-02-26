import React from "react";
import PerkCard from "../pricing_page/PerkCard";
import perks from "../../perks";
import { useHistory } from "react-router-dom";

// returns color based on specs
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
    const history = useHistory();
    return(
        <section id="landing-perks">
            {/* cta */}
            <button 
                type="button" 
                className="grad btn cta"
                onClick={() => history.push('/pricing') } 
            >
                Try it now
            </button>
            <h1 className="section-title perks-section-title">perks</h1>
            {/* shows perks from perks.js*/}
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