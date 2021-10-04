producer-consumer
=================
This project demonstrates async communication between independent Node.js processes.

A `producer` generates random arithmetic expressions in 1+1= format.
and sends it to `consumer` process which computes the value and replies to the `producer`. 
The producer and the consumer communicate via the Socket.io

Requirements
------------
Node.js, Socket.io 

Usage
-----
#### Run  
# Install the npm module
```bash
$ npm install
# run consumer and producer service together 
$ npm start
# run web front
http://localhost:3000
```
Tests
-----
Unit tests use Mocha
```bash
# Run tests
$ npm test
```