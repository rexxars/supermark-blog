'use strict';

var React = require('react');
var Api = require('../api');
var PostsList = require('../components/posts-list');

function IndexPage(props) {
    return <PostsList posts={props.posts} />;
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
