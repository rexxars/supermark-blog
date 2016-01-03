'use strict';

var path = require('path');
var supermark = require('supermark');

var postsDir = path.resolve(__dirname, '..', 'posts');
var Api = {};

Api.getLatestPosts = function getLatestPosts(options, callback) {
    supermark.findDocuments(postsDir + '/**/*.md', callback);
};

module.exports = Api;
