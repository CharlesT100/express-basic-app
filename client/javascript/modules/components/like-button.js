/** @jsx React.DOM */
 
'use strict';
 
var React = require('react');

module.exports = React.createClass({
    displayName: 'LikeButton',

    getInitialState: function() {
        return {liked: false};
    },

    handleClick: function (event) {
        var status = !this.state.liked ? 'liked' : 'unliked';
        alertify.success('You tried to ' + status.slice(0, - 1) + ' this');

        setTimeout(function () {
            alertify.success('You ' + status + ' this!');
            this.setState({liked: !this.state.liked});
        }.bind(this), 2000);
    },

    render: function () {
        var text = this.state.liked ? 'like' : 'unlike';
        return (
            <div className="well" onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </div>
        );
    }
});
