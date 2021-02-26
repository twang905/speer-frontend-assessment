import React from "react";
import speakerOne from "../../assets/speaker1.png";
import speakerTwo from "../../assets/speaker2.png";
import ReactAudioPlayer from 'react-audio-player';
import paradise from "../../assets/paradise.mp3";

var isPlaying = false;
const song = new Audio(paradise);

function playAudio() {
    isPlaying ? song.pause() : song.play();
    isPlaying = !isPlaying;
}

function SuperiorSound() {
    return(
        <section id="superior-sound">
            <div className="row superior-sound-items">
                <div className="col-7 superior-sound-text">
                    {/* title */}
                    <h1 className="landing-title">superior sound</h1>
                    <h2 className="landing-subtitle">Experience live versions of your favourite songs.</h2>   
                    {/* demo button */}
                    <button type="button" className="demo-button superior-sound">SEE DEMO</button>
                </div>
                {/* speaker images */}
                <div className="col-5 superior-sound-speakers">
                    <ReactAudioPlayer src="../../assets/paradise.mp3"/>
                    <button type="button" onClick={ playAudio } className="speaker-button">
                        <img className="speaker-superior-one" src={speakerOne}/>
                        <img className="speaker-superior-two" src={speakerTwo}/>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default SuperiorSound;