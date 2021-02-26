import React from "react";

function TermsOfService() {
  return(
    <div className="row">
      {/* keep to left half of screen */}
      <div className="col-lg-6">
        {/* text */}
        <p className="terms-of-service">By continuing, I acknowledge that I've read and agree to the Terms of Service & Privacy Policy</p>
        {/* button */}
        <button type="button" className="grad-btn payment-page-button">Download</button>
      </div>
      {/* empty placeholder to take up right side of screen */}
      <div className="col-lg-6" />
    </div>
  );
}

export default TermsOfService;