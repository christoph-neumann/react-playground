/** @jsx React.DOM */
'use strict'

var React = require('react')

var Welcome = React.createClass({

	render: function() {
		return (
			<div className="welcome">
			Pick a Demo:
			<ul>
				<li><a href="#/timer">Timer</a></li>
				<li><a href="#/todo">To Do List</a></li>
				<li><a href="#/slider">Sliding Panels</a></li>
			</ul>
			</div>
		)
	}
})

module.exports = Welcome
