'use strict';

var React = require('react');
var Sidebar = require('./sidebar');

function Layout(props) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{props.title && props.title + ' - '}Example blog</title>
                <link rel="stylesheet" href="/css/pure-min.css" />
                <link rel="stylesheet" href="/css/grids-responsive-min.css" />
                <link rel="stylesheet" href="/css/blog.css" />
            </head>
            <body>
                <div id="layout" className="pure-g">
                    <Sidebar />

                    <div className="content pure-u-1 pure-u-md-3-4">
                        {props.children}
                    </div>
                </div>
            </body>
        </html>
    );
}

Layout.propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.node
};

module.exports = Layout;
