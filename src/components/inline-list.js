'use strict';

var React = require('react');

function InlineList(props) {
    return (
        <span className="inline-list">
            {props.items.map(function(item) {
                var link = props.link + '/' + encodeURIComponent(item);
                return <a key={item} className="post-category" href={link}>{item}</a>;
            })}
        </span>
    );
}

InlineList.propTypes = {
    items: React.PropTypes.array.isRequired,
    link: React.PropTypes.string.isRequired
};

module.exports = InlineList;
