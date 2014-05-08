/** @jsx React.DOM */
'use strict'

var React = require('react')
var ctl = require('../widget')

var Timer = React.createClass({

	getDefaultProps: function() {
		return {
			seconds: 42
		}
	},

	getInitialState: function() {
		return {seconds: this.props.seconds}
	},

	tick: function() {
		console.log(this.state.seconds)
		if ( this.state.seconds <= 1 ) {
			clearInterval(this.interval)
		}
		this.setState({ seconds: this.state.seconds - 1 })
	},

	componentDidMount: function() {
		this.interval = setInterval(this.tick, 1000)
	},

	componentWillUnmount: function() {
		console.log("Removing Timer")
		clearInterval(this.interval)
	},

	render: function() {
		var PhotoBox = ctl.PhotoBox
		return (
			<div>{
				this.state.seconds <= 0
				? <PhotoBox src="images/espresso.png" caption="Coffee Time!"/>
				: <div>Only {this.state.seconds} more seconds!</div>
			}</div>
		)
	}
})

module.exports = Timer
