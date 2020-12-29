'use strict';
const path = require('path');
const webRootPath = path.resolve(__dirname);  
const jsPath = path.join(webRootPath, 'dist');
const sassPath = path.join(webRootPath, 'css');
module.exports = {
    context: path.join(__dirname, 'app'),
    optimization: {
        minimize: true
    },
    entry: {        
        main: './main.ts' 
    },
    output: {
        publicPath: webRootPath,
        path: jsPath,
        filename: '[name].js'
    },
    module: { //this section you add the plugins
       rules:[
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.(scss|css)$/,
            exclude: /node_modules/,
            use: [
                 { loader: "style-loader" },
                 { loader: "css-loader" },
                 {loader:"sass-loader"}
            ]
            }
       ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [ ]
};
