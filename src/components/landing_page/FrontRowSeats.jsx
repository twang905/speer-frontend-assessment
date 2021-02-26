import React from "react";
import { useHistory } from "react-router-dom";

function FrontRowSeats() {
    const history = useHistory();
    return(
        <section id="front-row-seats">
            {/* cta */}
            <button 
                type="button" 
                className="btn cta front-row"
                onClick={() => history.push('/pricing') } 
            >
                Try it now
            </button>
            <div className="row">
                <div className="col-5 image-reveal">
                    {/* reveal bubbles */}
                    <div id="reveal-one" class="reveal"></div>
                    <div id="reveal-two" class="reveal"></div>
                </div>
                <div className="col-7 front-row-content">
                    {/* title */}
                    <h1 className="landing-title">Front row seats</h1>
                    <h2 className="landing-subtitle">Experience concerts up close and personal.</h2>
                    {/* cta */}
                    <button type="button" className="demo-button front-row">SEE DEMO</button>
                </div>
            </div>
        </section>
    );
}

export default FrontRowSeats;