function calculator(n1, op, n2) {
    let firstNumber = parseFloat(n1);
    let operator = op;
    let secondNumber = parseFloat(n2);
    let result = 0;

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        case '%':
            result = firstNumber % secondNumber;
            break;
        default:
            break;
    }

    console.log(result.toFixed(2));
}
calculator(25.5, '-', 3);