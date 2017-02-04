const path = require('path');
const webpack = require("webpack");

module.exports = {
    context:__dirname + '/front',
    entry:__dirname + '/front/index.js',
    output:{
        path:__dirname + '/public/js',
        filename:'bundle.js',
        publicPath:'js'
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
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