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
            this.props.onSearch(locationVal);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <br />
                    <input type="search" placeholder="City ..." ref="locationVal" />
                    <br /><br />
                    <hr />
                    <button className="hollow button info expanded">Get Weather</button>
                </form>
            </div>
        );
    }
}

export default GetWeatherFormComponent;