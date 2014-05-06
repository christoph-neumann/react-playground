'use strict'

var $ = require('jquery')
var React = require('react')

var config = require("./config")
var todo = require('./todo')
var TodoModel = todo.Model

$(document).ready(function () {
	console.log(config.app_name +" "+ config.version)
	//React.renderComponent(view.Timer({ seconds: config.timer_seconds }), document.getElementById('main'))
	React.renderComponent(todo.List({ model: new TodoModel() }), document.getElementById('main'))
})

// Make require available in the Javascript console.
window.require = require
