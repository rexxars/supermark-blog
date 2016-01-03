'use strict';

var React = require('react');

function ErrorPage(props) {
    return (
        <div>
            <h1>Error {props.error.code} :(</h1>
            <pre><code>{props.error.message}</code></pre>

            <p><a href="/">To front page?</a></p>
        </div>
    );
}

ErrorPage.propTypes = {
    error: React.PropTypes.instanceOf(Error).isRequired
};

module.exports = ErrorPage;
