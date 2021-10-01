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
            console.log('connection');
            socket.on('CH01', function (message, log, callback) {
                io.emit('log', log);
                self.consumer(message, (message, log) => {
                    io.emit('log', log);
                    callback(message);
                });
            });

        });
        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html');
        });
        server.listen(3000, () => {
            console.log('listening on *:3000');
        });
    }
    receive(consumerfn) {
        this.consumer = consumerfn;
    }
}

module.exports = receiver;