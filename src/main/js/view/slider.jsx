/** @jsx React.DOM */
'use strict'

var events = require('events')
var $ = require('jquery')
var React = require('react')
var _m = require('mori')


var Slider = React.createClass({

	getDefaultProps: function() {
		return {
			model: new SliderModel()
		}
	},

	getInitialState: function() {
		var model = this.props.model
		model.add()
		model.add()

		return model.current()
	},

	modelListener: function (current) {
		var w = this

		var $tray = $(this.refs.tray.getDOMNode())
		$tray.removeClass('trans')
		if ( current.kind == 'add' ) {
			this.setState(current)
			$tray.css('right', '-98px');
			setTimeout(function () {
				$tray.addClass('trans')
				$tray.css('right', '2px');
			}, 0)
		} else if ( current.kind == 'pop' ) {
			setTimeout(function () {
				$tray.addClass('trans')
				$tray.css('right', '-98px');
				setTimeout(function () {
					$tray.removeClass('trans')
					w.setState(current)
					$tray.css('right', '2px');
				}, 300)
			}, 0)
		}
	},

	componentDidMount: function() {
		this.props.model.listen(this.modelListener)
	},

	componentWillUnmount: function() {
		this.props.model.unlisten(this.modelListener)
	},

	panel: function(size, info) {
		var id = _m.get(info, 'id')
		var style = {
			'background-color': _m.get(info, 'color'),
			'right': (size - id) * 100
		}
		return (
			<div key={id} className="panel" style={style}>
				<div className="text">{ id }</div>
			</div>
		)
	},

	render: function() {
		var p = this.props
		var s = this.state
		return (
			<div className="slider">
				<div ref="tray" className="tray" style={{width: (s.size + 1) * 100 }}>
					{ _m.clj_to_js(_m.map(_m.partial(this.panel, s.size), s.stack)) }
				</div>
				<div className="window">
					<a className="add" href="#" onClick={ function () { p.model.add(); return false; } }>+</a>
					<a className="back" href="#" onClick={ function () { p.model.pop(); return false; } }>{'<'}</a>
				</div>
			</div>
		)
	}
})

module.exports = Slider


function SliderModel() {
	var emitter = new events.EventEmitter()

	var id = 0
	var stack = _m.list()


	function notify(kind) {
		var c = current()
		c.kind = kind
		emitter.emit('change', c)
	}

	function listen(listener) {
		listener(current())
		emitter.on('change', listener)
	}

	function unlisten(listener) {
		emitter.removeListener('change', listener)
	}


	function rand_color() {
		var colors = _m.map(function () { return Math.floor(Math.random() * 256) }, _m.take(3,_m.range()))
		var color = "rgb("+ _m.clj_to_js(colors).join(", ") +")"
		console.log(color)
		return color
	}

	function add() {
		id += 1
		stack = _m.conj(stack, _m.hash_map('id', id, 'color', rand_color()))
		notify('add')
	}

	function pop() {
		if ( id == 0 ) return
		id -= 1
		stack = _m.rest(stack)
		notify('pop')
	}

	function current() {
		return { stack: stack, size: id, kind: 'init' }
	}

	// Public
	this.listen = listen
	this.unlisten = unlisten
	this.current = current

	this.add = add
	this.pop = pop
}
