/** @jsx React.DOM */
'use strict'

var React = require('react')

var PhotoBox = React.createClass({

	propTypes: {
		src: React.PropTypes.string.isRequired,
		caption: React.PropTypes.string
	},

	render: function() {
		var p = this.props
		return (
			<div className="photo-box">
				<div><img src={p.src}/></div>
				{ p.caption ? <div className="caption">{p.caption}</div> : "" }
			</div>
		)
	}
})

module.exports = PhotoBox
