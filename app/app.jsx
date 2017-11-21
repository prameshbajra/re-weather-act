import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import MainComponent from "MainComponent";


ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={MainComponent} >
        </Route>
    </BrowserRouter>,
    document.getElementById("app")
);