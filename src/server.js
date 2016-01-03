/* eslint-disable no-console */
'use strict';

var express = require('express');
var render = require('./render');
var app = express();

app.get('/', render(require('./pages/index')));
app.get('/post/:slug', render(require('./pages/blog-post')));
app.get('/author/:author', render(require('./pages/author')));
app.get('/category/:category', render(require('./pages/category')));
app.use(express.static('public'));

var server = app.listen(3000, function() {
    console.log('Blog listening at http://%s:%s', 'localhost', server.address().port);
});
