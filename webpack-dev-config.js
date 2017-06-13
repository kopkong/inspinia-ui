/**
 * Created by colin on 16/7/7.
 */

const path = require('path'),
    webpack = require('webpack');
    COMMON = require('./webpack-common-config');

module.exports = Object.assign(COMMON, {

    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
        COMMON.entry
    ],

    output: {
        filename: 'bundle.js',
        path: '/',
        publicPath: '/'
    },

    module: {
        rules: COMMON.module.rules.concat([
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader','sass-loader'],
                exclude: /node_modules/
            }
        ])
    },

    plugins : COMMON.plugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
        ])

});