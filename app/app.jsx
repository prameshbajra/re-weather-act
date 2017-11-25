import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";

import MainComponent from "MainComponent";
import WeatherComponent from "WeatherComponent";
import AboutComponent from "AboutComponent";

require("style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css");
require("style-loader!css-loader!sass-loader!ApplicationStyles");
$(document).foundation();

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={MainComponent} >
        </Route>
    </HashRouter>,
    document.getElementById("app")
);