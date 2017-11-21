import React from "react";
import { Link } from "react-router-dom";

class NavComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>Nav Bar here ..</h2>
                <Link to="/">Weather</Link>
                <Link to="/about">About</Link>
                <Link to="/examples">Examples</Link>
            </div>
        );
    }
}

export default NavComponent;