'use strict';

var React = require('react');
var Markdown = require('react-markdown');
var Api = require('../api');
var PostHeader = require('../components/post-header');

function PostPage(props) {
    return (
        <div className="main-content posts">
            <PostHeader {...props.post} />

            <Markdown source={props.post.document} />
        </div>
    );
}

PostPage.propTypes = {
    post: React.PropTypes.object
};

PostPage.loadData = function(req, callback) {
    Api.getPostBySlug(req.params.slug, function onPostFetched(err, data) {
        callback(err, { post: data }, data && data.title);
    });
};

module.exports = PostPage;
