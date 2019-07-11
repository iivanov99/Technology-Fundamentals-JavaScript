function solve(arr) {
    arr = arr
        .filter((num, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()

    console.log(arr.join(' '))
}
solve([3, 0, 10, 4, 7, 3])