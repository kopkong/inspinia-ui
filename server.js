/**
 * Created by colin on 2017/6/13.
 */

const path = require('path'),
    express = require('express'),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    config = require('./webpack.config'),
    compiler = webpack(config),
    app = express(),
    PORT = 4301;

app.use(express.static(__dirname));

// 在 index.html 中处理任何一个 route
// app.get('*', function (request, response){
//     response.sendFile(path.resolve(__dirname, 'index.html'))
// });

app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    stats: {
        colors: true,
        cached: false
    },
    publicPath: '/',
    index: "index.html"
}));

app.use(webpackHotMiddleware(compiler));

app.listen(PORT, function () {
    console.log('listening ' + PORT);
});
