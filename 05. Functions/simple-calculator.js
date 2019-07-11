function simpleCalculator(firstNumber, secondNumber, operator) {
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;
    let func = 0;
    let result = 0;

    switch (operator) {
        case 'multiply':
            func = (x, y) => x * y;
            break;
        case 'divide':
            func = (x, y) => x / y;
            break;
        case 'add':
            func = (x, y) => x + y;
            break;
        case 'subtract':
            func = (x, y) => x - y;
            break;
        default:
            break;
    }

    result = func(firstNumber, secondNumber);
    console.log(result);
}
simpleCalculator('2', '3', 'add')