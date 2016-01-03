'use strict';

var React = require('react');
var PostExcerpt = require('./post-excerpt');

function PostsList(props) {
    return (
        <div className="main-content posts">
            <h1 className="content-subhead">{props.header}</h1>
            {props.posts.map(PostExcerpt)}
        </div>
    );
}

PostsList.propTypes = {
    posts: React.PropTypes.array.isRequired,
    header: React.PropTypes.string.isRequired
};

PostsList.defaultProps = {
    header: 'Recent posts'
};

module.exports = PostsList;
