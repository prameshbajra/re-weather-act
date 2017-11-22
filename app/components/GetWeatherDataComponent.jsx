import React from "react";

class GetWeatherFormData extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>{this.props.locationVal}<br />{this.props.temp}</h3>
            </div>
        );
    }
}

export default GetWeatherFormData;