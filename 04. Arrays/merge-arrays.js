function mergeArrays(firstArray, secondArray) {
    let arraysMerged = [];

    for (let i = 0; i < Math.min(firstArray.length, secondArray.length); i++) {
        if (i % 2 === 0) {
            arraysMerged[i] = +firstArray[i] + (+secondArray[i]);
        } else {
            arraysMerged[i] = firstArray[i] + secondArray[i];
        }
    }
    console.log(arraysMerged.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);