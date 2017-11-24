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
                <div className="row">
                    <div className="columns medium-6 large-6 small-centered">
                        <Switch>
                            <Route path="/examples" component={ExamplesComponent} />
                            <Route path="/about" component={AboutComponent} />
                            <Route exact path="/" component={WeatherComponent} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainComponent;