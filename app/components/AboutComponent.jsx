import React from "react";

class AboutComponent extends React.Component {
    render() {
        return (
            <div>
                <br /><br />
                <h3 className="text-center">About</h3>
                <hr />
                This small web app was made to learn react, react router, foundation, webpack and many more. Doing this I just found that React is awesome and the debugging part is just beautiful.
                <hr />
                <ul className="vcard">
                    <li className="fn">Pramesh Bajracharya</li>
                    <li><span className="state">Phone Number : </span>, <span className="zip">+91-9959204435</span></li>
                    <li className="email">E-mail : <a href="#">pe.messh@gmail.com</a></li>
                    <li className="locality">Chuchepati, Chabahil</li>
                    <li className="street-address">Kathmandu, Nepal.</li>
                </ul>
            </div>
        );
    }
}

export default AboutComponent;