import React from "react";
import { NavLink } from "react-router-dom";

class NavComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    onSearch(e) {
        e.preventDefault();
        alert("Not complete !! Wiring up left !!");
    }
    render() {
        return (
            <div className="top-bar" id="topBar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Weather By - Bajracharya</li>
                        <li>
                            <NavLink exact to="/" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>Weather</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/examples" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>Examples</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <form onSubmit={this.onSearch}>
                            <ul className="menu">
                                <li>
                                    <input type="search" placeholder="Search here ..." />
                                </li>
                                <li>
                                    <button className="hollow button info ">Get Weather</button>
                                </li>
                            </ul>
                        </form>
                    </ul>
                </div>
            </div >
        );
    }
}

export default NavComponent;