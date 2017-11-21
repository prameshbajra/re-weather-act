import React from "react";
import { Route, Switch } from "react-router-dom";

import NavComponent from "NavComponent";
import AboutComponent from "AboutComponent"
import WeatherComponent from "WeatherComponent";
import ExamplesComponent from "ExamplesComponent";

class MainComponent extends React.Component {
    render() {
        return (
            <div>
                <NavComponent />
                <h1>Super cool</h1>
                <Switch>
                    <Route path="/examples" component={ExamplesComponent} />
                    <Route path="/about" component={AboutComponent} />
                    <Route exact path="/" component={WeatherComponent} />
                </Switch>
            </div>
        );
    }
}

export default MainComponent;