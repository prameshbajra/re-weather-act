import React from "react";

class GetWeatherFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
    }
    formSubmit(e) {
        e.preventDefault();
        const locationVal = this.refs.locationVal.value;
        if (locationVal.length > 0) {
            this.refs.locationVal.value = "";
            // think of this as using onSearch attribute from WeatherComponent's form ...
            this.props.onSearch(locationVal);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <input type="text" ref="locationVal" />
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
}

export default GetWeatherFormComponent;