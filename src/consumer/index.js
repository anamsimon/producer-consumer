const Consumer = require('./consumer');
const Receiver = require('./receiver');
let receiver = new Receiver();
new Consumer('c1', receiver).start();