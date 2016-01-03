'use strict';

var React = require('react');
var PostHeader = require('./post-header');

function PostExcerpt(props) {
    return (
        <section className="post" key={props.slug}>
            <PostHeader {...props} isList />

            {props.excerpt &&
                <div className="post-description">
                    <p>{props.excerpt}</p>
                </div>
            }
        </section>
    );
}

PostExcerpt.propTypes = {
    slug: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    excerpt: React.PropTypes.string,
    author: React.PropTypes.object,
    date: React.PropTypes.instanceOf(Date).isRequired,
    categories: React.PropTypes.array.isRequired
};

module.exports = PostExcerpt;
