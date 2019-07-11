function solve(kW, age) {
    let power = +kW;
    age = +age;
    let result = 0;

    function getTaxCoefFromPower(power) {
        if (power <= 37) {
            return 0.43;
        } else if (power <= 55) {
            return 0.5;
        } else if (power <= 74) {
            return 0.68;
        } else if (power <= 110) {
            return 1.38;
        } else {
            return 1.54;
        }
    }

    function getTaxCoefFromage(age) {
        if (age < 5) {
            return 2.8;
        } else if (age < 14) {
            return 1.5;
        } else {
            return 1;
        }
    }

    result = power * getTaxCoefFromPower(power) * getTaxCoefFromage(age);
    console.log(`${result.toFixed(2)} lv.`);
}

solve('45', '10');