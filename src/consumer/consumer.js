const Expression = require('../helper/expression')
const Logger = require('../helper/logger');

class consumer {

    constructor(id, receiver) {
        this.receiver = receiver;
        this.id = id;
    }

    start() {
        let self = this;
        self.receiver.register((expression, callback) => {
            this.rcvLog(expression);
            if (Expression.validate(expression)) {
                let result = Expression.evaluate(expression);
                this.sendLog(result);
                callback(result);
            } else {
                Logger.log(`${this.id} ${expression} invalid expression`);
            }
        });
    }

    sendLog(log) {
        Logger.log(`${this.id} sends ${log}`);
    }

    rcvLog(log) {
        Logger.log(`${this.id} rcvs ${log}`);
    }
}
module.exports = consumer;