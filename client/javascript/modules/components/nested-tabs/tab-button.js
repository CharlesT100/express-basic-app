/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'NestedTabsNav',

    propTypes: {
        isActive: React.PropTypes.bool.isRequired,
        title: React.PropTypes.string.isRequired,
        onTabClick: React.PropTypes.func.isRequired,
        index: React.PropTypes.number.isRequired
    },

    handleClick: function(event) {
        this.props.onTabClick(this.props.index);
    },

    render: function() {
        return (
            <li className={this.props.isActive ? 'active' : ''}>
                <a onClick={this.handleClick}>
                    {this.props.title}
                </a>
            </li>
        );
    }
});
