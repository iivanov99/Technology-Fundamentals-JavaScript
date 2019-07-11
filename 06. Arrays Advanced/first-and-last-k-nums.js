function solve(arr) {
    arr = arr.map(x => +x)

    let k = arr.shift()
    let firstElements = arr.slice(0, k)
    let lastElements = arr.splice(arr.length - k)

    console.log(firstElements.join(' '))
    console.log(lastElements.join(' '))
}
solve([3, 1, 2, 3, 4, 5, 6, 7]);