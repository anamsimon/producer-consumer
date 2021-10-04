producer-consumer
=================
This project demonstrates async communication between independent Node.js processes.

A `Producer` generates random arithmetic expressions in 1+1= format on a predefined interval and sends it to `Consumer` process which computes the value and replies to the producer. Both producer and consumer connect over Socket io. Producer takes the help of `Expression` helper to generate expressions. Consumers validates and evaluates expression with the help of same helper. Both producer and consumers writes all sending and receiving message to logger. Logger logs to console and also publish to the webfront. The `Web front` of the project which creates a socket connection with the logger and continously read from there and write the html page. 


Requirements
------------
Node.js, Socket.io 

Usage
-----
#### Run  
# Install the npm module
```bash
$ npm install
# run consumer, producer service and web front together 
$ npm start
# to load run web front on browser
http://localhost:3000

# all configurations are stored in file
.env
```
Tests
-----
Unit tests use Mocha
```bash
# Run tests
$ npm test
```