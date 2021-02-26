import React from "react";

function Footer() {
    // get current year
    const year = new Date().getFullYear();
    return(
        <div id="footer">
            {/* email row */}
            <i class="email-icon fas fa-envelope"></i>
            <p className="email">support@experienceconcerts.co</p>
            {/* logo */}
            <h3 className="logo">EXP|CON</h3>
            {/* copyright */}
            <p className="copyright">{year} ⓒ All Rights Reserved | Speer Technologies Incorporated</p>
        </div>
    );
}

export default Footer;