import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, IndexRoute, hashHistory } from "react-router";
import MainComponent from "MainComponent";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={MainComponent}>

        </Route>
    </Router>,
    document.getElementById("app")
);