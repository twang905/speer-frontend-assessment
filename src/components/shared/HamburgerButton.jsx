import React from "react";

function HamburgerButton(props) {
    const style = { backgroundColor: props.color }
    return(
        <button onClick={ props.onClick } className="hamburger-button">
            <div className="hamburger-menu">
                <div style={style} className="hamburger-line" />
                <div style={style} className="hamburger-line" />
                <div style={style} className="hamburger-line" />
            </div>
        </button>
    );
}

export default HamburgerButton;