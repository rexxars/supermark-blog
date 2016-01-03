'use strict';

var React = require('react');
var Api = require('../api');
var PostsList = require('../components/posts-list');

function CategoryPage(props) {
    return (
        <PostsList
            header={'Posts in category ' + props.category}
            posts={props.posts}
        />
    );
}

CategoryPage.propTypes = {
    posts: React.PropTypes.array.isRequired,
    category: React.PropTypes.string.isRequired
};

CategoryPage.loadData = function(req, callback) {
    Api.getPostsByCategory(req.params.category, function onPostsFetched(err, data) {
        if (!err && data.length === 0) {
            err = new Error('Category not found');
            err.code = 404;
        }

        callback(err, {
            posts: data,
            category: req.params.category
        }, req.params.category);
    });
};

module.exports = CategoryPage;
