import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import Menu from "./Menu";

// navigation bar
function Navbar(props) {
  const logoStyle = { color: props.color, };
  // whether or not to show menu
  const [showMenu, setShowMenu] = useState(false);
  // toggles whether or not to show menu
  function show() {
    setShowMenu(!showMenu);
  } 
  // navigation bar
  return(
    <nav class="navigation-bar">
      {/* expanded menu */}
      <Menu showMenu={showMenu} />
      <HamburgerButton onClick={show} color={props.color}/>
      {/* EXP|CON logo */}
      <a style={logoStyle} class="navbar-brand" href="">EXP|CON</a>
    </nav>
  );
}

export default Navbar;