/** @jsx React.DOM */
'use strict'

var React = require('react')
var _m = require('mori')

var Slider = React.createClass({

	getInitialState: function() {
		return {
			stack: _m.list(
				_m.hash_map('id', 0, 'color', '#ff0000'),
				_m.hash_map('id', 1, 'color', '#00ff00')
			)
		}
	},

	panel: function(info) {
		var id = _m.get(info, 'id')
		return (<div key={id} className="panel" style={{'background-color': _m.get(info, 'color')}}>{ id }</div>)
	},

	render: function() {
		return (
			<div className="slider">
			{ _m.clj_to_js(_m.map(this.panel, this.state.stack)) }
			</div>
		)
	}
})

module.exports = Slider
