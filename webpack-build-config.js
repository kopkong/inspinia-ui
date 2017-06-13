/**
 * Created by colin on 16/7/8.
 */

var path = require('path'),
    webpack = require('webpack'),
    CleanPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    COMMON = require('./webpack-common-config');


module.exports = Object.assign(COMMON, {

    entry: [
        COMMON.entry
    ],

    output: {
        path:  COMMON.appOutputFolder,
        filename: 'main.js'
    },

    module: {
        loaders: COMMON.module.loaders.concat([
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
                exclude: /node_modules/
            }
        ])
    },

    plugins: COMMON.plugins.concat([
        new CleanPlugin([COMMON.appOutputFolder]),
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
});