class expression {
    generate() {
        let expression = Math.floor(Math.random() * 10) + '+' + Math.floor(Math.random() * 10) + '=';
        return expression;
    }
    evaluate(expression) {
        return eval(expression.replace('=', ''));
    }
    validate(expression) {
        const regEx = /^\d+[+]\d+=$/;
        return regEx.test(expression);
    }
}
module.exports = new expression();