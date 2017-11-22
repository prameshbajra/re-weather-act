import React from "react";
import { Route, Switch } from "react-router-dom";

import GetWeatherFormComponent from "GetWeatherFormComponent";
import GetWeatherDataComponent from "GetWeatherDataComponent";

class WeatherComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>Enter your location</h2>
                <h6>(City , Town etc)</h6>
                <GetWeatherFormComponent />
                <GetWeatherDataComponent />
            </div>
        );
    }
}

export default WeatherComponent;