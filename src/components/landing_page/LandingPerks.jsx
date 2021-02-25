import React from "react";
import PerkCard from "../pricing_page/PerkCard";
import perks from "../../perks";

function LandingPerks() {
    return(
        <section id="landing-perks">
            <h1 className="section-title">perks</h1>
            <div className="row">{
                perks.map((perk) =>
                <PerkCard 
                    title={perk.title}
                    description={perk.description}
                />
            )}
            </div>
        </section>
    );
}

export default LandingPerks;