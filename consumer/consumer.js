const Expression = require('../expression')

class consumer {

    constructor(id, receiver) {
        this.receiver = receiver;
        this.id = id;
    }

    start() {
        let self = this;
        self.receiver.receive((expression, callback) => {
            if (Expression.validate(expression)) {
                let result = Expression.evaluate(expression);
                console.log(`${self.id} rcvs ${expression}`);
                console.log(`${self.id} sends ${result}`);
                callback(result, `${self.id} rcvs ${expression} ${self.id} sends ${result}`);
            }
        });
    }
}
module.exports = consumer;