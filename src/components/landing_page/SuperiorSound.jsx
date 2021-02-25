import React from "react";
import speakerOne from "../../assets/speaker1.png";
import speakerTwo from "../../assets/speaker2.png";


function SuperiorSound() {
    return(
        <section id="superior-sound">
            <div className="row superior-sound-items">
                <div className="col-7 superior-sound-text">
                    <h1 className="landing-title">superior sound</h1>
                    <h2 className="landing-subtitle">Experience live versions of your favourite songs.</h2>   
                    <button type="button" className="demo-button superior-sound">SEE DEMO</button>
                </div>
                <div className="col-5 superior-sound-speakers">
                    <img className="speaker-superior-one" src={speakerOne}/>
                    <img className="speaker-superior-two" src={speakerTwo}/>
                </div>
            </div>
        </section>
    );
}

export default SuperiorSound;