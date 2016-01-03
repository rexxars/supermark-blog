'use strict';

var React = require('react');
var Api = require('../api');
var PostsList = require('../components/posts-list');

function AuthorPage(props) {
    return (
        <PostsList
            header={'Posts by ' + props.author}
            posts={props.posts}
        />
    );
}

AuthorPage.propTypes = {
    posts: React.PropTypes.array.isRequired,
    author: React.PropTypes.string.isRequired
};

AuthorPage.loadData = function(req, callback) {
    Api.getPostsByAuthor(req.params.author, function onPostsFetched(err, data) {
        if (!err && data.length === 0) {
            err = new Error('Author not found');
            err.code = 404;
        }

        callback(err, {
            posts: data,
            author: req.params.author
        }, 'Posts by ' + req.params.author);
    });
};

module.exports = AuthorPage;
