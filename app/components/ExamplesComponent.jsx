import React from "react";
import { NavLink } from "react-router-dom";

class ExamplesComponent extends React.Component {
    render() {
        return (
            <div>
                <br /><br />
                <h3 className="text-centered">Examples</h3>
                <p className="text-centered">Some examples are mentioned below!</p>
                <ol>
                    <li>
                        <NavLink to="/?location=Kathmandu">Kathmandu, Nepal</NavLink>
                    </li>
                    <li>
                        <NavLink to="/?location=California">San Francisco, California</NavLink>
                    </li>
                </ol>
            </div>
        );
    }
}

export default ExamplesComponent;