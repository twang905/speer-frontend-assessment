import React from "react";

function DropdownSelector() {
  return(
    <label className="textfield-label">Expiry month
      <select value="Radish">
        <option value="Orange">Orange</option>
        <option value="Radish">Radish</option>
        <option value="Cherry">Cherry</option>
      </select>
    </label>
  );
}

export default DropdownSelector;