module.exports = {
    entry: "./app/app.jsx",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        modules: [__dirname, "node_modules"],
        alias: {
            // Add key value pair for your imports ...
            MainComponent: "app/components/MainComponent.jsx",
            NavComponent: "app/components/NavComponent.jsx"
        },
        extensions: ["*", ".js", ".jsx"]
    },
    module: {
        rules: [{
            loader: "babel-loader",
            query: {
                presets: ["react", "env"]
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    }
}