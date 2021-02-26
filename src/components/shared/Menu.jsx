import React from "react";
import MenuItem from "./MenuItem";
import menuItems from "../../menu_items";

function Menu(props) {
  // expanded menu
  const expandedStyle = {
    width: "680px",
    height: "680px",
  }
  // collapsed menu
  const collapsedStyle = {
    width: "0px",
    height: "0px",
  }
  // make menu items visible
  const showItems = {
    visibility: "visible",
    color: "white",
  }
  // hide menu items
  const hideItems = {
    visibility: "hidden",
    color: "transparent",
  }

  return(
    <div>
      <div style={ props.showMenu ? expandedStyle : collapsedStyle } className="circle" />
      {/* create menu items using items listed in menu_items.js */}
      <div className="menu-items">
        {menuItems.map((item) => 
          <MenuItem 
            title={item.title}
            style={props.showMenu ? showItems : hideItems}
            route={item.route}
          />
        )}
      </div>
    </div>
  );
}

export default Menu;