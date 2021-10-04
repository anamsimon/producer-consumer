const io = require('socket.io-client');
require('dotenv').config();

class sender {
    constructor() {
        this.socket = io(process.env.CONSUMER_HOST + ':' +
            process.env.CONSUMER_PORT);

    }
    send(expression, callback) {
        this.socket.emit(process.env.CONSUMER_CHANNEL, expression, callback);
    }
}

module.exports = sender;