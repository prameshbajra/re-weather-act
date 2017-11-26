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
    static defaultProps = {
        locationVal: undefined,
        temp: undefined,
        isLoading: false,
        errorMessage: undefined
    }
    componentDidMount() {
        const query = this.props.location.search;
        // this if is required because we dont want anything happening when url doesnt have a query parameter ...
        if (query.length > 0) {
            const locationVal = query.slice(10, query.length);
            if (locationVal && locationVal.length > 0) {
                this.handleSearch(locationVal);
                window.location.hash = "/";
            }
        }
    }
    componentWillReceiveProps(newProps) {
        const query = newProps.location.search;
        if (query.length > 0) {
            const locationVal = query.slice(10, query.length);
            if (locationVal && locationVal.length > 0) {
                this.handleSearch(locationVal);
                window.location.hash = "/";
            }
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
                errorMessage: "We cannot find the location. Does it exist? We haven't heard of it. Sorry!"
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
                    <ErrorComponent errorMessage={errorMessage} />
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