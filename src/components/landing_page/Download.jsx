import React from "react";
import { useHistory } from 'react-router-dom';

function Download() {

    const history = useHistory();

    return(
        <div id="download">
            <section className="row">
                {/* text */}
                <div className="col-lg-9">
                    <h1 className="section-title download-title">Get exp|con now</h1>
                    <h2 className="download-subtitle">Purchase and download the app.</h2>
                </div>
                {/* cta */}
                <div className="col-lg-3">
                    <button 
                        type="button" 
                        onClick={() => history.push('/pricing') } 
                        className="grad-btn try-it-button"
                    >
                        TRY IT NOW
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Download;