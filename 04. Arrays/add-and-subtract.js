function solve(arr) {
    let arrSum = 0;
    let modifiedArr = [];
    let modifiedArrSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (+arr[i] % 2 === 0) {
            modifiedArr[i] = +arr[i] + i;
        } else {
            modifiedArr[i] = +arr[i] - i;
        }

        arrSum += +arr[i];
        modifiedArrSum += +modifiedArr[i];
    }

    console.log(modifiedArr);
    console.log(arrSum);
    console.log(modifiedArrSum);
}
solve([5, 15, 23, 56, 35])