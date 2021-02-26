import React from "react";
import { useHistory } from 'react-router-dom';

// a single menu item
function MenuItem(props) {
  const history = useHistory();
  return(
    <div>
      <button 
        type="button"
        style={ props.style} 
        className="menu-item"
        onClick={() => history.push(props.route) } 
      >
        <h1>{props.title}</h1>
      </button>
    </div>
  );
}

export default MenuItem;