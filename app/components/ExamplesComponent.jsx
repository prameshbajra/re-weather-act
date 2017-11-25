import React from "react";
import { NavLink } from "react-router-dom";

class ExamplesComponent extends React.Component {
    render() {
        return (
            <div>
                <br /><br />
                <h3 className="text-center">Examples</h3>
                <p className="text-center">Some examples are mentioned below!</p>
                <ol>
                    <li>
                        <NavLink to="/?location=Kathmandu">Kathmandu, Nepal</NavLink>
                    </li>
                    <li>
                        <NavLink to="/?location=California">San Francisco, California</NavLink>
                    </li>
                    <li>
                        <NavLink to="/?location=Lalitpur">Lalitpur, Nepal</NavLink>
                    </li>
                    <li>
                        <NavLink to="/?location=Bhaktapur">Bhaktapur, Nepal</NavLink>
                    </li>
                    <li>
                        <NavLink to="/?location=Palpa">Palpa, Nepal</NavLink>
                    </li>
                    <li>
                        {/* show this to biraj :D */}
                        <NavLink to="/?location=Africa">Nepaljung, Nepal</NavLink>
                    </li>
                </ol>
            </div>
        );
    }
}

export default ExamplesComponent;