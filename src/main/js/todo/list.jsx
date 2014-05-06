/** @jsx React.DOM */
'use strict'

var React = require('react')
var m = require('mori')

var Item = require('./item')

var ToDoList = React.createClass({

	getInitialState: function() {
		return { items: m.vector() }
	},

	keyListener: function(e) {
		if ( e.keyCode !== 13 ) {
			return false
		}
		var new_item = this.refs.new_item.getDOMNode()
		var text = new_item.value.trim()
		new_item.value = ""
		this.props.model.addItem(text)
		return false
	},

	modelListener: function (data) {
		this.replaceState({ items: m.get(data, 'items') })
	},

	componentDidMount: function() {
		this.props.model.listen(this.modelListener)
	},

	componentWillUnmount: function() {
		this.props.model.unlisten(this.modelListener)
	},

	itemMarkup: function (item) {
		return <Item key={m.get(item, "id")}>{ m.get(item, "description") }</Item>
	},

	render: function() {
		return (
			<div className="todo-list">
				<div className="header">
					<div className="prompt">»</div>
					<div className="input"><input ref="new_item" type="text" placeholder="What needs to be done?" onKeyUp={this.keyListener}/></div>
				</div>
				{ m.clj_to_js(m.map(this.itemMarkup, this.state.items)) }
			</div>
		)
	}
})

module.exports = ToDoList
