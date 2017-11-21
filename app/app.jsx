import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";

import MainComponent from "MainComponent";
import WeatherComponent from "WeatherComponent";
import AboutComponent from "AboutComponent";

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={MainComponent} >
        </Route>
    </HashRouter>,
    document.getElementById("app")
);