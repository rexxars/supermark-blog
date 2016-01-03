'use strict';

var React = require('react');
var PostExcerpt = require('./post-excerpt');

function LatestPostsList(props) {
    return (
        <div className="main-content posts">
            <h1 className="content-subhead">Recent Posts</h1>
            {props.posts.map(PostExcerpt)}
        </div>
    );
}

LatestPostsList.propTypes = {
    posts: React.PropTypes.array.isRequired
};

module.exports = LatestPostsList;
