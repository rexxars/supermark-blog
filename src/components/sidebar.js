'use strict';

var React = require('react');

function Sidebar() {
    return (
        <div className="sidebar pure-u-1 pure-u-md-1-4">
            <div className="header">
                <h1 className="brand-title"><a href="/">A Supermark Blog</a></h1>
                <h2 className="brand-tagline">Creating a blog using supermark</h2>
            </div>
        </div>
    );
}

module.exports = Sidebar;
