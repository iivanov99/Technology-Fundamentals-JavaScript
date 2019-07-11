function solve(arr) {
    arr = arr.map(x => +x)
    let resultArr = []

    for (let number of arr) {
        if (number >= 0) {
            resultArr.push(number)
        } else {
            resultArr.unshift(number)
        }
    }

    resultArr.forEach(x => console.log(x))
}
solve(['7', '-2', '8', '9'])