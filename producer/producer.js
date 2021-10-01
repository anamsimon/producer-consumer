const Expression = require('../expression')
class producer {

    constructor(id, sender) {
        this.sender = sender;
        this.id = id;
    }

    start() {
        let self = this;
        setInterval(() => {
            let expression = Expression.generate();
            console.log(`${self.id} sends ${expression}`);
            self.sender.send(expression, `${self.id} sends ${expression}`, (result) => {
                console.log(`${self.id} rcvs ${result}`);
            });
        }, 300)
    }
}

module.exports = producer;