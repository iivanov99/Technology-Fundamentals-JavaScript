function maxNumber(array) {
    let topIntegersArray = [];

    for (let i = 0; i < array.length; i++) {
        let currentNumber = +array[i];
        let isBigger = true;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] >= currentNumber) {
                isBigger = false;
            }
        }

        if (isBigger) {
            topIntegersArray.push(currentNumber);
        }
    }
    console.log(topIntegersArray.join(' '));
}
maxNumber([4, 4, 3, 2]);