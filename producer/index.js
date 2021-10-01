 
const Producer = require('./producer');
const Sender = require('./sender'); 
let sender = new Sender();
new Producer('p1',sender).start();
new Producer('p2',sender).start();
