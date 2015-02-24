/** @jsx React.DOM */
'use strict'

var React = require('react')


function rand_color() {
	function num() { return (Math.floor(Math.random() * 128) + 128) }
	var color = "rgb("+ [num(), num(), num()].join(", ") +")"
	console.log(color)
	return color
}

var Nested = React.createClass({

	getInitialState: function() {
		return {
			box: {
				name: "Box 1",
				color: rand_color()
			}
		}
	},

	/*
	 * This will add a new box spec at the bottom of the tree. Will React just check for changes at
	 * the top level, or find the change all the way down at the bottom? React finds the change!
	 */
	addBox: function () {
		var at = this.state.box
		var num = 2
		while (typeof at.child !== 'undefined') {
			at = at.child
			num += 1
		}
		at.child = {
			name: ("Box "+ num),
			color: rand_color()
		}
		this.forceUpdate()
	},

	render: function() {
		return (
			<div className="nested">
				<button onClick={this.addBox}>Add Box</button>
				<Box spec={this.state.box} />
			</div>
		)
	}
})


var Box = React.createClass({

	propTypes: {
		spec: React.PropTypes.object.isRequired
	},

	render: function() {
		var spec = this.props.spec
		return (
			<div className="box" style={{"background-color": spec.color}}>
				{spec.name}
				{ typeof spec.child === 'undefined' ? null : <Box spec={spec.child} /> }
			</div>
		)
	}
})

module.exports = Nested
