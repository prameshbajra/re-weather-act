import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";

import MainComponent from "MainComponent";
import WeatherComponent from "WeatherComponent";
import AboutComponent from "AboutComponent";

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={MainComponent} >
        </Route>
    </BrowserRouter>,
    document.getElementById("app")
);