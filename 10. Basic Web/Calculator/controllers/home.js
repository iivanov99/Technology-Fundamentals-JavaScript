const Calculator = require('../models/Calculator.js');

module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req, res) => {
        const calculatorParams = req.body.calculator;

        const calculator = new Calculator(Number(calculatorParams.leftOperand), calculatorParams.operator, Number(calculatorParams.rightOperand));
        const result = calculator.calculateResult();

        res.render('home/index', { calculator, result });
    }
};