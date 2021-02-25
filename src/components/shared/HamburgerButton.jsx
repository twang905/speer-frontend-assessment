import React from "react";

function HamburgerButton(props) {

    const style = { backgroundColor: props.color }
    return(
        <div className="hamburger-menu">
            <div style={style} className="hamburger-line"></div>
            <div style={style} className="hamburger-line"></div>
            <div style={style} className="hamburger-line"></div>
        </div>
    );
}

export default HamburgerButton;