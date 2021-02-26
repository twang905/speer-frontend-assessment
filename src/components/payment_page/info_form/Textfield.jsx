import React from "react";

function Textfield(props) {
  return(
    <label className="textfield-label">
      {props.label}
      <input type="text" className="textfield"/>
    </label>
  );
}

export default Textfield;