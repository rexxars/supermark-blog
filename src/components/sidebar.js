'use strict';

var React = require('react');

function Sidebar() {
    return (
        <div className="sidebar pure-u-1 pure-u-md-1-4">
            <div className="header">
                <h1 className="brand-title">A Supermark Blog</h1>
                <h2 className="brand-tagline">Creating a blog using supermark</h2>

                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a className="pure-button" href="http://purecss.io">Pure</a>
                        </li>&nbsp;
                        <li className="nav-item">
                            <a className="pure-button" href="http://yuilibrary.com">YUI Library</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

module.exports = Sidebar;
