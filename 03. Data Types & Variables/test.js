function solve(arr) {  
    for (let i = 0; i < arr.length / 2; i++) {
        let currentVal = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = currentVal;
    }
    console.log(arr);
}
solve(['a','b','c','d']);