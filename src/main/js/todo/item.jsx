/** @jsx React.DOM */
'use strict'

var React = require('react')

var ToDoItem = React.createClass({

	render: function() {
		var p = this.props
		return this.transferPropsTo(
			<div className="item">
				<a className={"complete " + (p.done ? "done" : "")} href="#">✓</a>
				<div className="description">{ p.children }</div>
				<a className="delete" href="#">✗</a>
			</div>
		)
	}
})

module.exports = ToDoItem
