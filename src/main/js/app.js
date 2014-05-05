'use strict'

var $ = require('jquery')
var React = require('react')

var config = require("./config")
var todo = require('./todo')

$(document).ready(function () {
	console.log(config.app_name +" "+ config.version)
	//React.renderComponent(view.Timer({ seconds: config.timer_seconds }), document.getElementById('main'))
	React.renderComponent(todo.List(), document.getElementById('main'))
})
