var React = require('react')

var config = require("./config")
var view = require('./view')
var todo = require('./todo')
var TodoModel = todo.Model


var routes = {
	"/welcome": function() { return view.Welcome() },
	"/slider": function() { return view.Slider() },
	"/timer": function() { return view.Timer({ seconds: config.timer_seconds }) },
	"/todo": function () { return todo.List({ model: new TodoModel() }) }
}


function route() {
	var hash = location.hash.substr(1)
	var path = hash.replace(/^\/|\/$/g, '').split("\/")

	var init = routes[hash]
	if ( typeof init == 'undefined' ) {
		window.location = "#/welcome"
		return
	}

	console.log("view: "+ hash)

	var main = document.getElementById('main')
	React.unmountComponentAtNode(main)
	React.renderComponent(init(), main)
}


module.exports = route
