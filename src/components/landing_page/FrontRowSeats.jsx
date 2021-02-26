import React from "react";

function FrontRowSeats() {
    return(
        <section id="front-row-seats">
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
                    {/* reveal bubbles */}
                    <div id="reveal-three" class="reveal"></div>
                </div>
            </div>
        </section>
    );
}

export default FrontRowSeats;