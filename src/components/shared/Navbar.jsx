import React from "react";
import HamburgerButton from "./HamburgerButton";

function Navbar() {
    return(
      <header id="header">
          <nav class="navigation-bar">
            <HamburgerButton />
            <a class="navbar-brand" href="">EXP|CON</a>
          </nav>
      </header>
    );
}

export default Navbar;