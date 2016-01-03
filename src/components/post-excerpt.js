'use strict';

var React = require('react');
var formatDate = require('dateformat');
var InlineList = require('./inline-list');

var dateFormat = 'mmm d yyyy @ HH:MM';

function PostExcerpt(props) {
    var date = props.date;
    var authorLink = props.author && '/authors/' + encodeURIComponent(props.author.name);

    return (
        <section className="post" key={props.slug}>
            <header>
                <img className="post-avatar" height="48" width="48" src="//espen.codes/assets/img/me.jpg" />
                <h2 className="post-title"><a href={'/post/' + props.slug}>{props.title}</a></h2>
                <p className="post-meta">
                    Posted <time dateTime={date.toISOString()}>{formatDate(date, dateFormat)}</time>&nbsp;

                    {authorLink &&
                        <span>by <a className="post-author" href={authorLink}>{props.author.name}</a></span>
                    }

                    {props.categories.length > 0 &&
                        <span> under <InlineList link={'/categories/'} items={props.categories} /></span>
                    }
                </p>
            </header>

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
    tags: React.PropTypes.array.isRequired,
    categories: React.PropTypes.array.isRequired
};

module.exports = PostExcerpt;
