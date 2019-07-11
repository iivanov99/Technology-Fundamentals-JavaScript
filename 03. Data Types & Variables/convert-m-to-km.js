function metersToKm(input) {
    let meters = parseFloat(input);
    let kilometers = meters / 1000;

    console.log(kilometers.toFixed(2));
}
metersToKm('798');