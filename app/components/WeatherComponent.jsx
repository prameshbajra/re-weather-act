import React from "react";
import { Route, Switch } from "react-router-dom";

import GetWeatherFormComponent from "GetWeatherFormComponent";
import GetWeatherDataComponent from "GetWeatherDataComponent";

class WeatherComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locationVal: this.props.locationVal,
            temp: this.props.temp
        };
        this.handleSearch = this.handleSearch.bind(this);
    }
    static get defaultProps() {
        return {
            locationVal: "Kathmandu",
            temp: 30
        }
    }
    handleSearch(locationVal) {
        this.setState({
            locationVal: locationVal,
            temp: 23
        });
        console.log(this.state.locationVal);
    }
    render() {
        return (
            <div>
                <h2>Enter your location</h2>
                <h6>(City , Town etc)</h6>
                <GetWeatherFormComponent onSearch={this.handleSearch} />
                <GetWeatherDataComponent locationVal={this.state.locationVal} temp={this.state.temp} />
            </div>
        );
    }
}

export default WeatherComponent;