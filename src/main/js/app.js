'use strict'

var $ = require('jquery')
var React = require('react')

var config = require("./config")
var route = require("./route")

$(document).ready(function () {
	console.log(config.app_name +" "+ config.version)
	window.addEventListener("hashchange", route, false)
	route()
})

// Make require available in the Javascript console.
window.require = require
