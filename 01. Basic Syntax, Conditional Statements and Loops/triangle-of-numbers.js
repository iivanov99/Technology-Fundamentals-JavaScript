function triangleOfNumbers(input) {
    let n = parseInt(input);

    for (let i = 1; i <= n; i++) {
        let str = `${i} `.repeat(i);
        console.log(str);     
    }
}
triangleOfNumbers(5);