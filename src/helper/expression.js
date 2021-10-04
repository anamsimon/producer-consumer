class expression {
    generate() {
        let expression = Math.floor(Math.random() * 10) + '+' + Math.floor(Math.random() * 10) + '=';
        return expression;
    }
    evaluate(expression) {
        if (expression.endsWith('=') == true)
            expression = expression.substring(0, expression.length - 1)
        return eval(expression);
    }
    validate(expression) {
        const regEx = /^\d+[+]\d+=$/;
        return regEx.test(expression);
    }
}
module.exports = new expression();