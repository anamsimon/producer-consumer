const io = require('socket.io-client');

class sender {
    constructor() {
        this.socket = io('http://localhost:3000');

    }
    send(expression, log, callback) {
        this.socket.emit('CH01', expression, log, callback);
    }
}

module.exports = sender;