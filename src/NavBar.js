import React from 'react';
import { NavLink } from 'react-router-dom';

const ACTIVE_STYLE = {
  color: "#F3969A"
}

const STYLE = {
  color: "white"
}

/**Shows NavBar
 * 
 * Props: 
 * -None
 * 
 * State:
 * -None
 * 
 * App -> Route -> NavBar
 */
function NavBar() {

  return (
    <nav className="NavBar navbar navbar-dark bg-primary py-3 rounded">
      
      <NavLink exact to="/" activeStyle={ACTIVE_STYLE} style={STYLE} className="navbar-brand">Vending Machine</NavLink>
      <NavLink exact to="/popcorn" activeStyle={ACTIVE_STYLE} style={STYLE} className="nav-link">Popcorn</NavLink>
      <NavLink exact to="/cookies" activeStyle={ACTIVE_STYLE} style={STYLE} className="nav-link">Cookies</NavLink>
      <NavLink exact to="/second-hand-clothing" activeStyle={ACTIVE_STYLE} style={STYLE} className="nav-link">Second Hand Clothing</NavLink>
    </nav>
  )
}

export default NavBar;