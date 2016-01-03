'use strict';

var React = require('react');

function IndexPage(props) {
    return (
        <div>
            <h2>Index page, for realz!</h2>
            <pre>{JSON.stringify(props.some)}</pre>
        </div>
    );
}

IndexPage.dataLoader = function(req, callback) {
    setImmediate(callback, null, { some: 'loaded data', request: req });
};

module.exports = IndexPage;
