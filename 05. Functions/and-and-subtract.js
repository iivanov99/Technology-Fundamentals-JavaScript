function solve(n1, n2, n3) {
    let sum = (x, y) => x + y;
    let subtract = (x, y) => x - y;

    let result = subtract(sum(n1, n2), n3);
    console.log(result);
}
solve(2, 3, 6);