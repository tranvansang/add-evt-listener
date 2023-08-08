'use strict'
module.exports = function addEvtListener(target, event, handler, option) {
	target.addEventListener(event, handler, option)
	return function removeEvtListener() {
		return target.removeEventListener(event, handler, option)
	}
}
