/* eslint-disable no-console */
'use strict';

var express = require('express');
var render = require('./render');
var app = express();

app.get('/', render(require('./pages/index')));

var server = app.listen(3000, function() {
    console.log('Blog listening at http://%s:%s', 'localhost', server.address().port);
});
