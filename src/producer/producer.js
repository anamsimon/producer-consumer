const Expression = require('../helper/expression')
class producer {

    constructor(id, sender) {
        this.sender = sender;
        this.id = id;
    }

    start() {
        let self = this;
        setInterval((() => {
            self.getExpressionAndSend(Expression, self.sender);
        }), 300)
    }

    getExpressionAndSend(expression, sender) {
        let self = this;
        let mathExprssn = expression.generate();
        console.log(`${self.id} sends ${mathExprssn}`);
        sender.send(mathExprssn, `${self.id} sends ${mathExprssn}`, (result) => {
            self.resultCallBack(result);
        });
    }

    resultCallBack(result) {
        let self = this;
        console.log(`${self.id} rcvs ${result}`);
    }
}

module.exports = producer;