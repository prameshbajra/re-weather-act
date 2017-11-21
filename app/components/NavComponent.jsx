import React from "react";
import { NavLink } from "react-router-dom";

class NavComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>Nav Bar here ..</h2>
                <NavLink exact to="/" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>Weather</NavLink>
                <NavLink to="/about" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>About</NavLink>
                <NavLink to="/examples" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>Examples</NavLink>
            </div>
        );
    }
}

export default NavComponent;