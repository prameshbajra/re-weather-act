import React from "react";

class GetWeatherFormData extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <table className="hover stack">
                <thead>
                    <tr>
                        <th >City</th>
                        <th >Temprature (&deg;C)</th>
                        <th >Pressure (mb)</th>
                        <th >Humdity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.locationVal}</td>
                        <td>{this.props.temp}</td>
                        <td>{this.props.pressure}</td>
                        <td>{this.props.humidity}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default GetWeatherFormData;