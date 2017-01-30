var path = require('path');
const appPath =path.join(__dirname , '/app/');
const rootEntryFile = appPath + 'index.js';
const loadersPath = path.join(__dirname, 'node_modules');
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
    module: {
        loaders: [
            { test: /\.js/, loader: "babel-loader"}
        ]
    },
    devServer: {
        port: 7000,
    },
    devtool: 'source-map',
}