const {_require} = require('st_require');
const events = require('events').EventEmitter;
debugger
const Arht = function (fn , module) {

    fn.events = events;
    fn.module = module;

    return fn;
}

module.exports = Arht;
