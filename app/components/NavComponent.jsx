import React from "react";
import { NavLink } from "react-router-dom";

class NavComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
    }
    onSearch(e) {
        e.preventDefault();
        alert("Not complete !! Wiring up left !!");
    }
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Weather On</li>
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
                                    <input type="button" className="button" value="Get Weather" />
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