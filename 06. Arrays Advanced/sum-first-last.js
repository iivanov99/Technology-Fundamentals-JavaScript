function solve(arr) {
    let first = +arr.shift()
    let last = +arr.pop()
    
    console.log(first + last)
}
solve(['1', '2', '3']);