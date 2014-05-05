/** @jsx React.DOM */
'use strict'

var React = require('react')
var m = require('mori')

var Item = require('./item')

var ToDoList = React.createClass({

	getInitialState: function() {
		return {
			list: m.js_to_clj([
				{ id: 1, done: false, description: "Item on the list" },
				{ id: 2, done: true, description: "Second item on the list" }
			])
		}
	},

	listMarkup: function (item) {
		console.log(item)
		return <Item key={m.get(item, "id")}>{ m.get(item, "description") }</Item>
	},

	render: function() {
		return (
			<div className="todo-list">
				<div className="header">
					<div className="prompt">»</div>
					<div className="input"><input type="text" placeholder="What needs to be done?"/></div>
				</div>
				{ m.clj_to_js(m.map(this.listMarkup, this.state.list)) }
			</div>
		)
	}
})

module.exports = ToDoList
