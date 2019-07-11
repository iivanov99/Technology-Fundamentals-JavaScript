function condenseArr(arr) {
    while (arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = +arr[i] + (+arr[i + 1]);
        }
        arr.pop();
    }
    console.log(arr[0]);
}
condenseArr(['2', '10', '3']);