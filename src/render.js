'use strict';

var React = require('react');
var ReactDom = require('react-dom/server');
var ErrorPage = require('./pages/error');
var Layout = require('./components/layout');

function render(Component, title) {
    return function handleRoute(req, res) {
        function renderAndRespond(err, data) {
            // If we encounter any errors, render the error page instead
            if (err) {
                data = { error: err.message };
                Component = ErrorPage;
            }

            var html = '<!DOCTYPE html>';
            html += ReactDom.renderToStaticMarkup(
                <Layout title={title}>
                    <Component {...data} />
                </Layout>
            );

            res.send(html);
        }

        // If the component has declared a data loader, load the data first,
        // then trigger rendering
        if (Component.loadData) {
            Component.loadData(req, renderAndRespond);
        } else {
            renderAndRespond({ request: req });
        }
    };
}

module.exports = render;
