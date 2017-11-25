const webpack = require("webpack");

module.exports = {
    entry: [
        "script-loader!jquery/dist/jquery.min.js",
        "script-loader!foundation-sites/dist/js/foundation.min.js",
        "./app/app.jsx"
    ],
    externals: {
        jquery: "jQuery"
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
        })
    ],
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        modules: [__dirname, "node_modules"],
        alias: {
            // Add key value pair for your imports ...
            MainComponent: "app/components/MainComponent.jsx",
            NavComponent: "app/components/NavComponent.jsx",
            WeatherComponent: "app/components/WeatherComponent.jsx",
            AboutComponent: "app/components/AboutComponent.jsx",
            ExamplesComponent: "app/components/ExamplesComponent.jsx",
            GetWeatherFormComponent: "app/components/GetWeatherFormComponent.jsx",
            GetWeatherDataComponent: "app/components/GetWeatherDataComponent.jsx",
            OpenWeatherMap: "app/apis/OpenWeatherMap.jsx",
            ErrorComponent: "app/components/ErrorComponent.jsx",

            ApplicationStyles: "app/styles/app.scss"
        },
        extensions: ["*", ".js", ".jsx"]
    },
    module: {
        rules: [{
            loader: "babel-loader",
            query: {
                presets: ["react", "env", "stage-0"]
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    },
    devtool: "cheap-module-eval-source-map"
}