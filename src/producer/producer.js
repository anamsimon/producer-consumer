const Expression = require('../helper/expression');
const Logger = require('../helper/logger');
require('dotenv').config();

class producer {

    constructor(id, sender) {
        this.sender = sender;
        this.id = id;
    }

    start() {
        let self = this;
        setInterval((() => {
            self.getExpressionAndSend(Expression, self.sender);
        }), process.env.PRODUCER_INTERVAL)
    }

    getExpressionAndSend(expression, sender) {
        let self = this;
        let mathExprssn = expression.generate();
        this.sendLog(mathExprssn);
        sender.send(mathExprssn, (result) => {
            self.resultCallBack(result);
        });
    }

    resultCallBack(result) {
        this.rcvLog(result);
    }

    sendLog(log) {
        Logger.log(`${this.id} sends ${log}`);
    }

    rcvLog(log) {
        Logger.log(`${this.id} rcvs ${log}`);
    }
}

module.exports = producer;