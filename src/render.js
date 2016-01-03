'use strict';

var React = require('react');
var ReactDom = require('react-dom/server');
var ErrorPage = require('./pages/error');

function render(Component) {
    return function handleRoute(req, res) {
        function renderAndRespond(err, data) {
            // If we encounter any errors, render the error page instead
            if (err) {
                data = { error: err.message };
                Component = ErrorPage;
            }

            res.send(ReactDom.renderToStaticMarkup(<Component {...data} />));
        }

        // If the component has declared a data loader, load the data first,
        // then trigger rendering
        if (Component.dataLoader) {
            Component.dataLoader(req, renderAndRespond);
        } else {
            renderAndRespond({ request: req });
        }
    };
}

module.exports = render;
