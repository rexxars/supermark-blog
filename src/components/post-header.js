'use strict';

var React = require('react');
var formatDate = require('dateformat');
var InlineList = require('./inline-list');

var dateFormat = 'mmm d yyyy @ HH:MM';

function PostHeader(props) {
    var date = props.date;
    var title = props.isList ? <a href={'/post/' + props.slug}>{props.title}</a> : props.title;
    var authorLink = props.author && '/author/' + encodeURIComponent(props.author.name);

    return (
        <header>
            <h2 className="post-title">{title}</h2>
            <p className="post-meta">
                Posted <time dateTime={date.toISOString()}>{formatDate(date, dateFormat)}</time>&nbsp;

                {authorLink &&
                    <span>by <a className="post-author" href={authorLink}>{props.author.name}</a></span>
                }

                {props.categories.length > 0 &&
                    <span> under <InlineList link={'/category'} items={props.categories} /></span>
                }
            </p>
        </header>
    );
}

PostHeader.propTypes = {
    isList: React.PropTypes.bool.isRequired,
    slug: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.object,
    date: React.PropTypes.instanceOf(Date).isRequired,
    categories: React.PropTypes.array.isRequired
};

PostHeader.defaultProps = {
    isList: false
};

module.exports = PostHeader;
