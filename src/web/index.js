require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {
    Server
} = require("socket.io");
const io = new Server(server);

class webserver {
    constructor() {
        io.on('connection', function (socket) {
            console.log('log connected');
            socket.on('log', function (message) {
                io.emit('weblog', message);
            });
        });

        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html');
        });
        server.listen(process.env.WEB_SERVER_PORT, () => {
            console.log('listening on *:', process.env.WEB_SERVER_PORT);
        });
    }
}
module.exports = new webserver();