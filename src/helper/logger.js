const io = require('socket.io-client');
require('dotenv').config();

class logger {
    constructor() {
        this.socket = io(process.env.WEB_SERVER_HOST + ':' +
        process.env.WEB_SERVER_PORT);
    }
    log(msg) {
        console.log(msg);
        this.socket.emit('log', msg);
    }
}
module.exports = new logger();