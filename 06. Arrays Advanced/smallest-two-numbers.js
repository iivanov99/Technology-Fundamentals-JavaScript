function solve(arr) {
    arr = arr
        .sort((a, b) => a - b)
        .filter((num, i) => i < 2)

    console.log(arr.join(' '))
}
solve([3, 0, 10, 4, 7, 3])