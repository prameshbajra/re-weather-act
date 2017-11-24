import React from "react";
import { Route, Switch } from "react-router-dom";

import GetWeatherFormComponent from "GetWeatherFormComponent";
import GetWeatherDataComponent from "GetWeatherDataComponent";
const { getTemp } = require("OpenWeatherMap");

class WeatherComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locationVal: this.props.locationVal,
            temp: this.props.temp,
            isLoading: this.props.isLoading
        };
        this.handleSearch = this.handleSearch.bind(this);
    }
    static get defaultProps() {
        return {
            locationVal: "Weather you say?",
            temp: "We can find that for you!!",
            isLoading: false
        }
    }
    handleSearch(locationVal) {
        this.setState({ isLoading: true });
        getTemp(locationVal).then((temp) => {
            this.setState({
                locationVal: locationVal,
                temp: temp,
                isLoading: false
            });
        }, (errorMsg) => {
            this.setState({
                locationVal: "The location you entered was not found",
                temp: "We are very sorry but we cannot find the location!",
                isLoading: false
            });
        });

    }
    render() {
        const { isLoading, temp, locationVal } = this.state;
        const renderMessage = () => {
            if (isLoading) {
                return <h3 className="text-center">Loading weather ... Please wait !!</h3>
            } else if (temp && locationVal) {
                return <GetWeatherDataComponent locationVal={locationVal} temp={temp} />;
            }
        }
        return (
            <div>
                <br /><br />
                <h3 className="text-center">Enter your location</h3>
                <h6 className="text-center">(City , Town etc)</h6>
                <GetWeatherFormComponent onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        );
    }
}

export default WeatherComponent;