class Calculator {
    constructor(leftOperand, operator, rightOperand) {
        this.leftOperand = leftOperand;
        this.operator = operator;
        this.rightOperand = rightOperand;
    }

    calculateResult() {
        let result = 0;

        if (this.operator === '+') {
            result = this.rightOperand + this.leftOperand;
        } else if (this.operator === '-') {
            result = this.rightOperand - this.leftOperand;
        } else if (this.operator === '*') {
            result = this.rightOperand * this.leftOperand;
        } else if (this.operator === '/') {
            result = this.rightOperand / this.leftOperand;
        }

        return result;
    }
}

module.exports = Calculator;