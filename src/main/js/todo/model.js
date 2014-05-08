var events = require('events')
var m = require('mori')

function TodoModel() {
	var emitter = new events.EventEmitter()

	var id = 0
	var current = m.hash_map(
		'items', m.vector()
	)

	function notify() {
		emitter.emit('change', current)
	}

	function listen(listener) {
		listener(current)
		emitter.on('change', listener)
	}

	function unlisten(listener) {
		emitter.removeListener('change', listener)
	}

	function addItem(description) {
		console.log("Adding: "+ description)
		id += 1
		var items = m.conj(m.get(current, 'items'), m.hash_map('id', id, 'done', false, 'description', description))
		current = m.assoc(current, 'items', items)
		notify()
	}

	function removeItem(id) {
		var items = m.into(m.vector(), m.filter(function(item) { return m.get(item, 'id') !== id }, m.get(current, 'items')))
		current = m.assoc(current, 'items', items)
		notify()
	}

	// Init
	addItem("Item on the list")
	addItem("Second item on the list")

	// Public
	this.listen = listen
	this.unlisten = unlisten

	this.addItem = addItem
	this.removeItem = removeItem
}

module.exports = TodoModel
