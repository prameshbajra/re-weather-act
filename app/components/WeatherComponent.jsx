import React from "react";
import { Route, Switch } from "react-router-dom";

import GetWeatherFormComponent from "GetWeatherFormComponent";
import GetWeatherDataComponent from "GetWeatherDataComponent";
import ErrorComponent from "ErrorComponent";
const { getTemp } = require("OpenWeatherMap");

class WeatherComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locationVal: this.props.locationVal,
            temp: this.props.temp,
            isLoading: this.props.isLoading,
            errorMessage: this.props.errorMessage
        };
        this.handleSearch = this.handleSearch.bind(this);
    }
    static get defaultProps() {
        return {
            locationVal: "Weather you say?",
            temp: "We can find that for you!!",
            isLoading: false,
            errorMessage: undefined
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
                locationVal: this.props.locationVal,
                temp: this.props.temp,
                isLoading: false,
                errorMessage: errorMsg.message
            });
        });

    }
    render() {
        const { isLoading, temp, locationVal, errorMessage } = this.state;

        const renderMessage = () => {
            if (isLoading) {
                return <h3 className="text-center">Loading weather ... Please wait !!</h3>
            } else if (temp && locationVal) {
                return <GetWeatherDataComponent locationVal={locationVal} temp={temp} />;
            }
        }

        const renderError = () => {
            if (typeof errorMessage === "string") {
                return (
                    <ErrorComponent />
                );
            }
        }

        return (
            <div>
                <br /><br />
                <h3 className="text-center">Enter your location</h3>
                <h6 className="text-center">(City , Town etc)</h6>
                <GetWeatherFormComponent onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
}

export default WeatherComponent;