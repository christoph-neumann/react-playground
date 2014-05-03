/** @jsx React.DOM */
'use strict'

var React = require('react')

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
		clearInterval(this.interval)
	},

	render: function() {
		return (
			<div>{
				this.state.seconds <= 0
				? <div><img src="images/espresso.png"/><br/>Coffee Time!</div>
				: <div>Only {this.state.seconds} more seconds!</div>
			}</div>
		)
	}
})

module.exports = Timer
