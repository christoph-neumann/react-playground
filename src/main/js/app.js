'use strict'

var $ = require('jquery')
var React = require('react')

var config = require("./config")
var view = require('./view')

$(document).ready(function () {
	console.log(config.app_name +" "+ config.version)
	React.renderComponent(view.Timer({ seconds: config.timer_seconds }), document.getElementById('main'))
})
