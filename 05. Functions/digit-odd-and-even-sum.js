function solve(number) {
    number = +number;
    let oddSum = 0;
    let evenSum = 0;

    while (number > 0) {
        let digit = number % 10;

        if (digit % 2 == 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }

        number = parseInt(number / 10);
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
solve('3495892137259234');