import React from "react";
import HamburgerButton from "./HamburgerButton";

function Navbar(props) {
  const logoStyle = { color: props.color, }

  return(
    <nav class="navigation-bar">
      <HamburgerButton color={props.color}/>
      <a style={logoStyle} class="navbar-brand" href="">EXP|CON</a>
    </nav>
  );
}

export default Navbar;