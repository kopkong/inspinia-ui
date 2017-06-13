/**
 * Created by colin on 2017/6/13.
 */

var path = require('path'),
    express = require('express'),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    config = require('./webpack-dev-config'),
    compiler = webpack(config),
    app = express(),
    PORT = 4400;

// app.use(express.static(path.resolve(__dirname, '../')));

app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    stats: {
        colors: true,
        cached: false
    },
    publicPath: '/'
}));

app.use(webpackHotMiddleware(compiler));

app.listen(PORT, function () {
    console.log('listening ' + PORT);
});
