import React from "react";

class GetWeatherFormData extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3 className="text-center"> It's {this.props.temp} degrees celcuis in {this.props.locationVal}</h3>
            </div>
        );
    }
}

export default GetWeatherFormData;