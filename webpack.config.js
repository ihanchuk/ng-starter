const path = require('path');
const appPath =path.join(__dirname , '/app/');
const rootEntryFile = appPath + 'index.js';
const loadersPath = path.join(__dirname, 'node_modules');

var webpack = require("webpack");

module.exports = {
    context: appPath,
    entry: rootEntryFile,
    output:{
        path:appPath,
        filename:'bundle.js'
    },
    resolveLoader: {
        root: loadersPath
    },
    plugins:[
        new webpack.DefinePlugin({
            TEST_ENV:process.env.NODE_ENV === "test"
        })
    ],
    module: {
        loaders: [
            { test: /\.js/, loader: "babel-loader"},
            { test: /\.html/, loader: "raw-loader"},
            { test: /\.css/, loader: "style!css"},
            {  test: /\.scss$/, loader: "style!css!sass-loader"}
        ]
    },
    devServer: {
        port: 7000,
    },
    devtool: 'source-map',
}