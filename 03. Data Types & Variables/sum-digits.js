function sumDigits(inp) {
    let number = parseInt(inp);
    let digitSum = 0;

    while (number > 0) {
        let digit = number % 10;
        digitSum += digit;
        number = parseInt(number / 10);
    }

    console.log(digitSum);
}
sumDigits('543');