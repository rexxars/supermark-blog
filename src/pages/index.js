'use strict';

var React = require('react');
var Api = require('../api');
var LatestPosts = require('../components/latest-posts');

function IndexPage(props) {
    return <LatestPosts posts={props.posts} />;
}

IndexPage.propTypes = {
    posts: React.PropTypes.array.isRequired
};

IndexPage.loadData = function(req, callback) {
    Api.getLatestPosts({}, function onPostsFetched(err, data) {
        callback(err, { posts: data });
    });
};

module.exports = IndexPage;
