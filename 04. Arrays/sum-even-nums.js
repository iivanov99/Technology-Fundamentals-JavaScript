function sumEven(arr) {
    let evenSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (+arr[i] % 2 === 0) {
            evenSum += +arr[i];
        }
    }
    console.log(evenSum);
}
sumEven(['1','2','3','4','5','6']);