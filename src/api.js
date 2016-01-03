'use strict';

var path = require('path');
var supermark = require('supermark');

/**
 * Note: This is obviously the silliest of "APIs".
 * We're simply re-crawling a folder recursively for documents, every 30 seconds.
 *
 * In a more awesome world, we'd perhaps watch the directory instead, adding and
 * removing documents based on filesystem events, for instance. Or we could add
 * some sort of manual trigger to prevent us from constantly hitting the filesystem.
 * We could also just ask every time, but that'd obviously be a pretty inefficient
 * way of doing it.
 *
 * What I'm trying to tell you is: This shouldn't be used as anything near
 * "best practice", I'm just trying to accomplish a simple blog example in the least
 * amount of code, which is why I'm taking these shortcuts.
 */

var postsDir = path.resolve(__dirname, '..', 'posts');
var posts = [];
var Api = {};

function fetchDocs() {
    supermark.findDocuments(postsDir + '/**/*.md', function onDocsFound(err, docs) {
        if (err) {
            console.error(err);
            return;
        }

        posts = docs;
    });
}

Api.getLatestPosts = function getLatestPosts(options, callback) {
    setImmediate(
        callback,
        null,
        posts.slice(options.offset || 0, options.limit || 5)
    );
};

setInterval(fetchDocs, 30000);
fetchDocs();

module.exports = Api;
