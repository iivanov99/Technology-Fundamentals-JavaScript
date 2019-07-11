function poundsToDollars(input) {
    let pounds = parseFloat(input);
    let dollars = pounds * 1.31;

    console.log(dollars.toFixed(3));
}
poundsToDollars('80');