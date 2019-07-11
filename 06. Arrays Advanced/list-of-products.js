function solve(arr) {
    arr
        .sort()
        .forEach((x, i) => console.log(`${i + 1}.${x}`))
}
solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);