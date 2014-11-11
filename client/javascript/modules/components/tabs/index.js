/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var ReactAsync = require('react-async');
var superagent = require('superagent');

// sub-components
var TabsNav = require('./nav');
var TabContent = require('./tab-content');

module.exports = React.createClass({
    displayName: 'Tabs',

    propTypes: {
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
        apiURL: React.PropTypes.string
    },

    mixins: [ReactAsync.Mixin],

    fetchContent: function(callback) {
        if (this.props.apiURL) {
            superagent.get(this.props.apiURL, function(err, res) {
                callback(err, res ? res.body : null);
            });
        } else {
            callback(null, {
                activeTab: this.props.activeTab || 0,
                tabs: this.props.tabs || []
            });
        }

        /* Example input schema for 'tabs'
        [{
            title: 'Tab1',
            content: 'This is the first tab'
        }, {
            title: 'Tab2',
            content: 'This is the second tab'
        }...
        ]
        */
    },

    getInitialStateAsync: function(callback) {
        this.fetchContent(callback);
    },

    onTabClick: function(index) {
        this.setState({
            activeTab: index
        });
    },

    render: function() {
        return (
            <div className="tabbable-panel">
                <div className="tabbable-line">

                    {/* tabs navigation */}
                    <TabsNav
                        tabs={this.state.tabs}
                        activeTab={this.state.activeTab}
                        onTabClick={this.onTabClick}
                    />

                    {/* active tab content */}
                    <TabContent
                        content={this.state.tabs[this.state.activeTab].content}
                    />

                </div>
            </div>
        );
    }
});
