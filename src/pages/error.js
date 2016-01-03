'use strict';

var React = require('react');

function ErrorPage(props) {
    return (
        <div>
            <h1>So error :(</h1>
            <pre><code>{props.error}</code></pre>
        </div>
    );
}

ErrorPage.propTypes = {
    error: React.PropTypes.string.isRequired
};

module.exports = ErrorPage;
