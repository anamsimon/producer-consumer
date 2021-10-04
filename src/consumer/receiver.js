require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {
    Server
} = require("socket.io");
const io = new Server(server);

class receiver {
    constructor() {
        let self = this;
        io.on('connection', function (socket) {
            console.log('producer consumer connected');
            socket.on(process.env.CONSUMER_CHANNEL, function (message, callback) {
                self.consumerFunc(message, (message) => {
                    callback(message);
                });
            });

        });
        server.listen(process.env.CONSUMER_PORT, () => {
            console.log('consumer listening on *:', process.env.CONSUMER_PORT);
        });
    }

    register(consumerFunc) {
        this.consumerFunc = consumerFunc;
    }
}

module.exports = receiver;