'use strict'
var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);
const WebpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require("webpack-hot-middleware");
// var url = 'https://book.douban.com/';
var app = express();
app.use(express.static(__dirname));
app.use(express.static("spider_man"));
app.use(WebpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quit: true
}))
app.use(webpackHotMiddleware(compiler))
var port = process.port || 3000;
var url = "https://book.douban.com/";
app.get("/spider", function(req, res, next) {
    superagent.get(url).end(function(err, response) {
        if (err) {
            return next(err);
        }
        var $ = cheerio.load(response.text);
        var items = []
        $(".cover a").each(function(i, elem) {
            var s = $(elem),
            title = s.attr('title'),
            link = s.attr('href'),
            pic = s.find("img").attr("src")
            title && link && pic && items.push({
                title:title,
                link: link,
                pic: pic
            })
        })
        res.send(items)
    })
});

app.listen(port, function(){
    console.log(`app is listening at ${port}`)
})