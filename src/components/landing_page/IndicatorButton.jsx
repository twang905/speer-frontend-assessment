import React from "react";

function IndicatorButton(props) {
  return(
    <button type="button" onClick={ props.onClick } className="indicator-button">
        <div style={props.style} className="indicator"></div>
    </button>
  );
}

export default IndicatorButton;