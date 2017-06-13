/**
 * Created by colin on 16/7/7.
 */

const path = require('path'),
    webpack = require('webpack'),
    HTMLPlugin = require('html-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    // argv = JSON.parse(process.env.npm_config_argv).cooked[2].replace('--',''),
    outputFolder = 'dist';

module.exports = {
    devtool: 'source-map',

    entry: './src/app.js',
    
    plugins: [
        new HTMLPlugin({
            template: './src/index.html.tpl',
            filename: 'index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    plugins: ['transform-decorators-legacy'],
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'postcss'],
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?name=images/[name].[ext]'
                ]
            }
        ]
    }

    // postcss: function(){
    //     return [autoprefixer];
    // }
};