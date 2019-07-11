function sumFirstAndLast(arr) {
    let sum = +arr[0] + (+arr[arr.length - 1]);
    console.log(sum);
}
sumFirstAndLast(['10', '20', '30']);