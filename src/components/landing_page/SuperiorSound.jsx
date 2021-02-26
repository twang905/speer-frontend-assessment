import React from "react";
import speakerOne from "../../assets/speaker1.png";
import speakerTwo from "../../assets/speaker2.png";
import ReactAudioPlayer from 'react-audio-player';
import paradise from "../../assets/paradise.mp3";
import {useHistory} from "react-router-dom";

// keep track of if song is playing
var isPlaying = false;
const song = new Audio(paradise);

function playAudio() {
    // if song is playing, pause it, otherwise play the song
    isPlaying ? song.pause() : song.play();
    // toggle playing status
    isPlaying = !isPlaying;
}

function SuperiorSound() {
    const history = useHistory();
    return(
        <section id="superior-sound">
            {/* cta */}
            <button 
                type="button" 
                onClick={() => history.push('/pricing') } 
                className="btn cta superior-sound"
            >
                Try it now
            </button>
            {/* main body */}
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