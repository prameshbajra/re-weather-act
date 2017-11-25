import React from "react";
import { NavLink } from "react-router-dom";

class NavComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
    }
    onSearch(e) {
        e.preventDefault();
        const locationVal = this.refs.searchVal.value;
        const encodedLocation = encodeURIComponent(locationVal);
        if (locationVal.length > 0) {
            this.refs.searchVal.value = "";
            window.location.hash = `#/?location=${encodedLocation}`;
        }
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
                                    <input type="search" ref="searchVal" placeholder="Search here ..." />
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